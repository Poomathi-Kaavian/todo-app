# Setup Instructions

This document provides step-by-step instructions for setting up the TODO Application development environment.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download here](https://code.visualstudio.com/)

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd todo-app
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the backend directory:

```bash
cp env.example .env
```

Edit the `.env` file with your configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/todo-app
MONGODB_TEST_URI=mongodb://localhost:27017/todo-app-test

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your-super-secret-refresh-key-here
JWT_REFRESH_EXPIRE=30d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Swagger Configuration
SWAGGER_HOST=localhost:5000
SWAGGER_SCHEMES=http,https

# Security
BCRYPT_ROUNDS=12
```

**Important:** Replace the JWT secrets with strong, unique values for security.

### 4. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd ../frontend
npm install
```

### 5. Frontend Environment Configuration

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## Database Setup

### 1. Start MongoDB

**On Windows:**
```bash
# Start MongoDB service
net start MongoDB
```

**On macOS:**
```bash
# Start MongoDB using Homebrew
brew services start mongodb-community
```

**On Linux:**
```bash
# Start MongoDB service
sudo systemctl start mongod
```

### 2. Verify MongoDB Connection

Connect to MongoDB to verify it's running:

```bash
mongosh
```

## Running the Application

### 1. Start the Backend Server

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5000`

### 2. Start the Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will start on `http://localhost:3000`

### 3. Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **API Documentation:** http://localhost:5000/api-docs

## Development Workflow

### 1. Code Structure

```
todo-app/
├── backend/                 # Express.js backend
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utility functions
│   │   ├── validators/      # AJV validation schemas
│   │   └── config/          # Configuration files
│   └── package.json
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── utils/           # Utility functions
│   │   ├── hooks/           # Custom hooks
│   │   └── styles/          # CSS/SCSS files
│   └── package.json
└── docs/                    # Project documentation
```

### 2. Available Scripts

**Backend Scripts:**
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors
```

**Frontend Scripts:**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors
npm run format     # Format code with Prettier
```

### 3. Testing

Run tests for both backend and frontend:

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Team Member Setup

### 1. Git Configuration

Configure your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 2. Branch Strategy

- Create feature branches for new development
- Use descriptive branch names (e.g., `feature/user-authentication`)
- Create pull requests for code review

### 3. Code Standards

- Follow the coding standards outlined in `docs/CODING_STANDARDS.md`
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the connection string in `.env`
   - Verify MongoDB is accessible on the default port (27017)

2. **Port Already in Use**
   - Change the PORT in backend `.env` file
   - Update frontend API URL accordingly

3. **JWT Secret Error**
   - Ensure JWT_SECRET is set in backend `.env`
   - Use a strong, unique secret key

4. **CORS Issues**
   - Verify CORS_ORIGIN in backend `.env` matches frontend URL
   - Check that frontend is running on the correct port

### Getting Help

- Check the API documentation at `/api-docs`
- Review the coding standards in `docs/CODING_STANDARDS.md`
- Contact team members for assistance

## Production Deployment

### Environment Variables

For production deployment, ensure the following environment variables are set:

```env
NODE_ENV=production
MONGODB_URI=<production-mongodb-uri>
JWT_SECRET=<strong-production-secret>
CORS_ORIGIN=<production-frontend-url>
```

### Security Considerations

- Use strong, unique JWT secrets
- Enable HTTPS in production
- Configure proper CORS origins
- Set up rate limiting
- Use environment-specific database connections

## Next Steps

1. Review the project structure and coding standards
2. Set up your development environment
3. Familiarize yourself with the API endpoints
4. Start working on assigned tasks
5. Follow the team workflow and communication guidelines
