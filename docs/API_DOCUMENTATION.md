# API Documentation

This document provides comprehensive documentation for the TODO Application API.

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Response Format
All API responses follow a consistent format:

### Success Response
```json
{
  "status": "success",
  "message": "Operation completed successfully",
  "data": {
    // Response data here
  }
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Error description",
  "errors": [
    // Array of validation errors (if applicable)
  ]
}
```

## Authentication Endpoints

### Register User
**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "60f7b3b3b3b3b3b3b3b3b3b3",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "createdAt": "2024-01-15T10:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Login User
**POST** `/auth/login`

Authenticate user and return JWT tokens.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "user": {
      "id": "60f7b3b3b3b3b3b3b3b3b3b3",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Get Profile
**GET** `/auth/profile`

Get current user profile information.

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "createdAt": "2024-01-15T10:00:00.000Z"
  }
}
```

### Update Profile
**PUT** `/auth/profile`

Update user profile information.

**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com"
}
```

### Change Password
**POST** `/auth/change-password`

Change user password.

**Request Body:**
```json
{
  "currentPassword": "OldPass123!",
  "newPassword": "NewPass123!"
}
```

### Logout
**POST** `/auth/logout`

Logout user and invalidate tokens.

## Todo Endpoints

### Get All Todos
**GET** `/todo`

Get all todos for the authenticated user with pagination and filtering.

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 10)
- `completed` (boolean): Filter by completion status
- `priority` (string): Filter by priority (low, medium, high)
- `sortBy` (string): Sort field (createdAt, updatedAt, dueDate, priority, title)
- `sortOrder` (string): Sort order (asc, desc)
- `search` (string): Search term for title and description

**Response:**
```json
{
  "status": "success",
  "data": {
    "todos": [
      {
        "id": "60f7b3b3b3b3b3b3b3b3b3b3",
        "title": "Complete project documentation",
        "description": "Write comprehensive documentation",
        "completed": false,
        "priority": "high",
        "dueDate": "2024-12-31T23:59:59.000Z",
        "createdAt": "2024-01-15T10:00:00.000Z",
        "updatedAt": "2024-01-15T10:00:00.000Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "pages": 3
    }
  }
}
```

### Get Todo by ID
**GET** `/todo/:id`

Get a specific todo by its ID.

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "title": "Complete project documentation",
    "description": "Write comprehensive documentation",
    "completed": false,
    "priority": "high",
    "dueDate": "2024-12-31T23:59:59.000Z",
    "createdAt": "2024-01-15T10:00:00.000Z",
    "updatedAt": "2024-01-15T10:00:00.000Z"
  }
}
```

### Create Todo
**POST** `/todo`

Create a new todo item.

**Request Body:**
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive documentation for the TODO API",
  "priority": "high",
  "dueDate": "2024-12-31T23:59:59.000Z"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Todo created successfully",
  "data": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "title": "Complete project documentation",
    "description": "Write comprehensive documentation for the TODO API",
    "completed": false,
    "priority": "high",
    "dueDate": "2024-12-31T23:59:59.000Z",
    "createdAt": "2024-01-15T10:00:00.000Z",
    "updatedAt": "2024-01-15T10:00:00.000Z"
  }
}
```

### Update Todo
**PUT** `/todo/:id`

Update an existing todo item.

**Request Body:**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "priority": "medium",
  "completed": true
}
```

### Delete Todo
**DELETE** `/todo/:id`

Delete a todo item.

**Response:**
```json
{
  "status": "success",
  "message": "Todo deleted successfully"
}
```

### Bulk Update Todos
**PATCH** `/todo/bulk/update`

Update multiple todos at once.

**Request Body:**
```json
{
  "todoIds": ["60f7b3b3b3b3b3b3b3b3b3b3", "60f7b3b3b3b3b3b3b3b3b3b4"],
  "updateData": {
    "completed": true,
    "priority": "low"
  }
}
```

### Get Todo Statistics
**GET** `/todo/stats`

Get statistics for user's todos.

**Response:**
```json
{
  "status": "success",
  "data": {
    "total": 25,
    "completed": 15,
    "pending": 10,
    "highPriority": 5,
    "mediumPriority": 8,
    "lowPriority": 2
  }
}
```

## User Management Endpoints (Admin Only)

### Get All Users
**GET** `/user`

Get all users with pagination (Admin only).

**Query Parameters:**
- `page` (number): Page number
- `limit` (number): Items per page
- `role` (string): Filter by role (user, admin)
- `isActive` (boolean): Filter by active status

### Get User by ID
**GET** `/user/:id`

Get a specific user by ID (Admin only).

### Get User Todos
**GET** `/user/:id/todos`

Get all todos for a specific user (Admin only).

### Get User Statistics
**GET** `/user/:id/stats`

Get statistics for a specific user (Admin only).

### Deactivate User
**PATCH** `/user/:id/deactivate`

Deactivate a user account (Admin only).

### Activate User
**PATCH** `/user/:id/activate`

Activate a user account (Admin only).

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 500 | Internal Server Error |

## Rate Limiting

API requests are rate limited to prevent abuse:
- 100 requests per 15 minutes per IP address
- Rate limit headers are included in responses

## Swagger Documentation

Interactive API documentation is available at:
```
http://localhost:5000/api-docs
```

## Examples

### Complete Workflow Example

1. **Register a new user:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

2. **Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!"
  }'
```

3. **Create a todo:**
```bash
curl -X POST http://localhost:5000/api/todo \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-token>" \
  -d '{
    "title": "Learn API documentation",
    "description": "Study the API endpoints and examples",
    "priority": "high"
  }'
```

4. **Get all todos:**
```bash
curl -X GET http://localhost:5000/api/todo \
  -H "Authorization: Bearer <your-token>"
```
