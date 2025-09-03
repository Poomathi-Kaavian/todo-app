/**
 * AJV validation setup and configuration
 * Provides centralized validation for request data
 */

const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Initialize AJV instance
const ajv = new Ajv({
  allErrors: true,
  removeAdditional: true,
  useDefaults: true,
  coerceTypes: true
});

// Add format validators
addFormats(ajv);

/**
 * Create a validation middleware for request data
 * @param {Object} schema - AJV schema object
 * @param {string} dataSource - Source of data to validate ('body', 'query', 'params')
 * @returns {Function} Express middleware function
 */
const validateRequest = (schema, dataSource = 'body') => {
  return (req, res, next) => {
    try {
      const data = req[dataSource];
      const valid = ajv.validate(schema, data);

      if (!valid) {
        const errors = ajv.errors.map(error => ({
          field: error.instancePath || error.schemaPath,
          message: error.message,
          value: error.data
        }));

        return res.status(400).json({
          status: 'error',
          message: 'Validation failed',
          errors: errors
        });
      }

      // Replace request data with validated and sanitized data
      req[dataSource] = data;
      next();

    } catch (error) {
      console.error('Validation error:', error);
      return res.status(500).json({
        status: 'error',
        message: 'Internal validation error'
      });
    }
  };
};

/**
 * Validate request body
 * @param {Object} schema - AJV schema object
 * @returns {Function} Express middleware function
 */
const validateBody = (schema) => validateRequest(schema, 'body');

/**
 * Validate request query parameters
 * @param {Object} schema - AJV schema object
 * @returns {Function} Express middleware function
 */
const validateQuery = (schema) => validateRequest(schema, 'query');

/**
 * Validate request parameters
 * @param {Object} schema - AJV schema object
 * @returns {Function} Express middleware function
 */
const validateParams = (schema) => validateRequest(schema, 'params');

/**
 * Compile a schema for reuse
 * @param {Object} schema - AJV schema object
 * @returns {Function} Compiled validation function
 */
const compileSchema = (schema) => {
  return ajv.compile(schema);
};

/**
 * Add a custom format validator
 * @param {string} name - Format name
 * @param {Function|RegExp} validator - Format validator
 */
const addFormat = (name, validator) => {
  ajv.addFormat(name, validator);
};

module.exports = {
  ajv,
  validateRequest,
  validateBody,
  validateQuery,
  validateParams,
  compileSchema,
  addFormat
};
