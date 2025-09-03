/**
 * Todo Service
 * Handles all todo-related API calls
 * 
 * TODO: Implement the following features:
 * - Get all todos with pagination and filtering
 * - Get single todo by ID
 * - Create new todo
 * - Update existing todo
 * - Delete todo
 * - Bulk operations (update, delete)
 * - Get todo statistics
 * - Search todos
 */

import { apiClient } from './apiClient'

export const todoService = {
  /**
   * Get all todos with pagination and filtering
   * @param {Object} params - Query parameters
   * @returns {Promise<Object>} Todos with pagination data
   */
  async getTodos(params = {}) {
    try {
      const response = await apiClient.get('/todo', { params })
      
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch todos')
    }
  },

  /**
   * Get single todo by ID
   * @param {string} id - Todo ID
   * @returns {Promise<Object>} Todo data
   */
  async getTodoById(id) {
    try {
      const response = await apiClient.get(`/todo/${id}`)
      
      return response.data.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch todo')
    }
  },

  /**
   * Create new todo
   * @param {Object} todoData - Todo data
   * @returns {Promise<Object>} Created todo
   */
  async createTodo(todoData) {
    try {
      const response = await apiClient.post('/todo', todoData)
      
      return response.data.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create todo')
    }
  },

  /**
   * Update existing todo
   * @param {string} id - Todo ID
   * @param {Object} todoData - Updated todo data
   * @returns {Promise<Object>} Updated todo
   */
  async updateTodo(id, todoData) {
    try {
      const response = await apiClient.put(`/todo/${id}`, todoData)
      
      return response.data.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update todo')
    }
  },

  /**
   * Delete todo
   * @param {string} id - Todo ID
   * @returns {Promise<void>}
   */
  async deleteTodo(id) {
    try {
      await apiClient.delete(`/todo/${id}`)
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete todo')
    }
  },

  /**
   * Bulk update multiple todos
   * @param {Object} bulkData - Bulk update data
   * @returns {Promise<Object>} Update result
   */
  async bulkUpdateTodos(bulkData) {
    try {
      const response = await apiClient.patch('/todo/bulk/update', bulkData)
      
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to bulk update todos')
    }
  },

  /**
   * Get todo statistics
   * @returns {Promise<Object>} Todo statistics
   */
  async getTodoStats() {
    try {
      const response = await apiClient.get('/todo/stats')
      
      return response.data.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch todo statistics')
    }
  },

  /**
   * Search todos
   * @param {string} searchTerm - Search term
   * @param {Object} filters - Additional filters
   * @returns {Promise<Object>} Search results
   */
  async searchTodos(searchTerm, filters = {}) {
    try {
      const response = await apiClient.get('/todo', {
        params: {
          search: searchTerm,
          ...filters
        }
      })
      
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to search todos')
    }
  },

  /**
   * Toggle todo completion status
   * @param {string} id - Todo ID
   * @param {boolean} completed - Completion status
   * @returns {Promise<Object>} Updated todo
   */
  async toggleTodoComplete(id, completed) {
    try {
      const response = await apiClient.patch(`/todo/${id}`, { completed })
      
      return response.data.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to toggle todo completion')
    }
  }
}
