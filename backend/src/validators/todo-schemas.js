/**
 * AJV validation schemas for TODO operations
 * Defines validation rules for all TODO-related API endpoints
 */

// Schema for creating a new todo
const createTodoSchema = {
  type: 'object',
  required: ['title', 'description'],
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      pattern: '^[a-zA-Z0-9\\s\\-_.,!?]+$'
    },
    description: {
      type: 'string',
      minLength: 1,
      maxLength: 500,
      pattern: '^[a-zA-Z0-9\\s\\-_.,!?\\n\\r]+$'
    },
    priority: {
      type: 'string',
      enum: ['low', 'medium', 'high'],
      default: 'medium'
    },
    dueDate: {
      type: 'string',
      format: 'date-time'
    },
    completed: {
      type: 'boolean',
      default: false
    }
  },
  additionalProperties: false
};

// Schema for updating a todo
const updateTodoSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      pattern: '^[a-zA-Z0-9\\s\\-_.,!?]+$'
    },
    description: {
      type: 'string',
      minLength: 1,
      maxLength: 500,
      pattern: '^[a-zA-Z0-9\\s\\-_.,!?\\n\\r]+$'
    },
    priority: {
      type: 'string',
      enum: ['low', 'medium', 'high']
    },
    dueDate: {
      type: 'string',
      format: 'date-time'
    },
    completed: {
      type: 'boolean'
    }
  },
  additionalProperties: false,
  minProperties: 1
};

// Schema for todo ID parameter
const todoIdSchema = {
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      type: 'string',
      pattern: '^[0-9a-fA-F]{24}$'
    }
  },
  additionalProperties: false
};

// Schema for query parameters when getting todos
const getTodosQuerySchema = {
  type: 'object',
  properties: {
    page: {
      type: 'string',
      pattern: '^[0-9]+$',
      default: '1'
    },
    limit: {
      type: 'string',
      pattern: '^[0-9]+$',
      default: '10'
    },
    completed: {
      type: 'string',
      enum: ['true', 'false']
    },
    priority: {
      type: 'string',
      enum: ['low', 'medium', 'high']
    },
    sortBy: {
      type: 'string',
      enum: ['createdAt', 'updatedAt', 'dueDate', 'priority', 'title'],
      default: 'createdAt'
    },
    sortOrder: {
      type: 'string',
      enum: ['asc', 'desc'],
      default: 'desc'
    },
    search: {
      type: 'string',
      minLength: 1,
      maxLength: 100
    }
  },
  additionalProperties: false
};

// Schema for bulk operations
const bulkUpdateSchema = {
  type: 'object',
  required: ['todoIds', 'updateData'],
  properties: {
    todoIds: {
      type: 'array',
      items: {
        type: 'string',
        pattern: '^[0-9a-fA-F]{24}$'
      },
      minItems: 1,
      maxItems: 100
    },
    updateData: {
      type: 'object',
      properties: {
        completed: {
          type: 'boolean'
        },
        priority: {
          type: 'string',
          enum: ['low', 'medium', 'high']
        }
      },
      additionalProperties: false,
      minProperties: 1
    }
  },
  additionalProperties: false
};

module.exports = {
  createTodoSchema,
  updateTodoSchema,
  todoIdSchema,
  getTodosQuerySchema,
  bulkUpdateSchema
};
