# TODO Application - MERN Stack

A full-stack TODO application built with MongoDB, Express.js, React, and Node.js.

## Project Structure

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
│   ├── docs/                # Swagger documentation
│   ├── tests/               # Test files
│   ├── package.json
│   └── .env
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── utils/           # Utility functions
│   │   ├── hooks/           # Custom hooks
│   │   └── styles/          # CSS/SCSS files
│   ├── public/
│   ├── package.json
│   └── .env
└── docs/                    # Project documentation
```

## Team Members

- **Kokila-Kaavian** - DB Connection & Schema setup, Update todo API, Update todo UI
- **Samsuthin-Kaavian** - Get all todo API, Display all todo UI, Delete todo API
- **Main Developer** - Create todo API, Add todo UI, Delete todo UI

## Features

- ✅ Create TODO items
- ✅ Read/Display all TODO items
- ✅ Update TODO items
- ✅ Delete TODO items
- ✅ AJV validation for data integrity
- ✅ Swagger API documentation
- ✅ JWT authentication
- ✅ Responsive UI design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository
2. Install backend dependencies: `cd backend && npm install`
3. Install frontend dependencies: `cd frontend && npm install`
4. Set up environment variables
5. Start the development servers

## Coding Standards

Please refer to the coding standards document in the docs folder for detailed guidelines on:
- Variable naming conventions
- API design patterns
- Function structure
- File naming conventions
- Security practices
