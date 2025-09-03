# Coding Standards

This document outlines the coding standards and best practices for the TODO Application project.

## Backend Coding Standards

### Variables
- Define meaningful variable names that clearly indicate their purpose
- Use camelCase for normal variable declarations
- DB collection names and collection variable names should be identical
- Specify proper scope for variables (const, let)
- Avoid using numbers in variable names (e.g., data1, data2)

### API Design
- Use noun-based API names instead of verbs (e.g., `/api/user/info` not `/api/getUser`)
- API names should clearly define their functionality
- Differentiate between user and admin APIs
- Use appropriate HTTP methods:
  - GET for retrieving data
  - POST for creating new resources
  - PUT for updating existing resources
  - DELETE for removing resources
- Use hyphens (-) instead of special characters or camelCase in URLs
- Return consistent response formats
- Provide appropriate HTTP status codes for errors

### Functions
- Use arrow functions for function definitions
- Function names should clearly describe their functionality
- Implement exception handling in all functions
- Add comprehensive comments explaining functionality and logic

### File Naming
- Use descriptive file names
- Combine words using hyphens (-)
- Avoid spaces in file names
- Start with lowercase letters

### Code Structure
- Use proper indentation (2 spaces)
- Write comments for every functionality and logic
- Use modular programming to separate functionalities
- Implement exception handling for all functionalities
- Group declarations in separate blocks (e.g., library imports in one block)

### Data Validation
- Encrypt passwords using bcrypt
- Validate all data with appropriate conditions
- Use AJV validator for HTTP request data to prevent XSS attacks

### Security
- Every API must include authentication tokens
- All APIs should be properly authorized
- Store sensitive URLs and keys in .env files
- Implement rate limiting
- Use HTTPS in production
- Validate and sanitize all inputs

## Frontend Coding Standards

### Component Structure
- Use functional components with hooks
- Implement proper prop validation
- Use TypeScript for type safety (if applicable)
- Follow React best practices

### State Management
- Use React Query for server state
- Use local state for component-specific data
- Implement proper error boundaries

### Styling
- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use semantic HTML elements

### Performance
- Implement code splitting
- Use React.memo for expensive components
- Optimize images and assets
- Implement lazy loading where appropriate

## General Standards

### Git Workflow
- Use meaningful commit messages
- Create feature branches for new development
- Use pull requests for code review
- Keep commits atomic and focused

### Documentation
- Document all public APIs
- Maintain up-to-date README files
- Include code examples in documentation
- Document environment setup and deployment

### Testing
- Write unit tests for business logic
- Implement integration tests for APIs
- Use test-driven development where appropriate
- Maintain good test coverage

### Error Handling
- Implement comprehensive error handling
- Provide meaningful error messages
- Log errors appropriately
- Handle edge cases gracefully

## Code Review Checklist

- [ ] Code follows naming conventions
- [ ] Functions have proper error handling
- [ ] API endpoints return consistent responses
- [ ] Security best practices are followed
- [ ] Code is properly commented
- [ ] Tests are included and passing
- [ ] Documentation is updated
- [ ] Performance considerations are addressed
