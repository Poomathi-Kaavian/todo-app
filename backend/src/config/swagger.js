/**
 * Swagger documentation configuration
 * Sets up API documentation using swagger-jsdoc and swagger-ui-express
 */

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'TODO Application API',
    version: '1.0.0',
    description: 'A comprehensive API for managing TODO items with authentication and CRUD operations',
    contact: {
      name: 'TODO Team',
      email: 'team@todoapp.com'
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  servers: [
    {
      url: `http://${process.env.SWAGGER_HOST || 'localhost:5000'}`,
      description: 'Development server'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: {
      Todo: {
        type: 'object',
        required: ['title', 'description'],
        properties: {
          _id: {
            type: 'string',
            description: 'Unique identifier for the todo item'
          },
          title: {
            type: 'string',
            description: 'Title of the todo item',
            minLength: 1,
            maxLength: 100
          },
          description: {
            type: 'string',
            description: 'Detailed description of the todo item',
            minLength: 1,
            maxLength: 500
          },
          completed: {
            type: 'boolean',
            description: 'Completion status of the todo item',
            default: false
          },
          priority: {
            type: 'string',
            enum: ['low', 'medium', 'high'],
            description: 'Priority level of the todo item',
            default: 'medium'
          },
          dueDate: {
            type: 'string',
            format: 'date-time',
            description: 'Due date for the todo item'
          },
          userId: {
            type: 'string',
            description: 'ID of the user who owns this todo item'
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Creation timestamp'
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Last update timestamp'
          }
        }
      },
      User: {
        type: 'object',
        required: ['email', 'password', 'firstName', 'lastName'],
        properties: {
          _id: {
            type: 'string',
            description: 'Unique identifier for the user'
          },
          email: {
            type: 'string',
            format: 'email',
            description: 'User email address'
          },
          firstName: {
            type: 'string',
            description: 'User first name',
            minLength: 1,
            maxLength: 50
          },
          lastName: {
            type: 'string',
            description: 'User last name',
            minLength: 1,
            maxLength: 50
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Account creation timestamp'
          }
        }
      },
      Error: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'error'
          },
          message: {
            type: 'string',
            description: 'Error message'
          },
          errors: {
            type: 'array',
            items: {
              type: 'string'
            },
            description: 'Array of validation errors'
          }
        }
      },
      Success: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'success'
          },
          message: {
            type: 'string',
            description: 'Success message'
          },
          data: {
            type: 'object',
            description: 'Response data'
          }
        }
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ]
};

// Options for swagger-jsdoc
const options = {
  definition: swaggerDefinition,
  apis: [
    './src/routes/*.js',
    './src/controllers/*.js'
  ]
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

/**
 * Configure Swagger UI
 * @param {Express} app - Express application instance
 */
const configureSwagger = (app) => {
  // Swagger UI options
  const swaggerUiOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'TODO API Documentation',
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true
    }
  };

  // Serve Swagger documentation
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

  // Serve raw swagger.json
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  console.log('Swagger documentation available at /api-docs');
};

module.exports = configureSwagger;
