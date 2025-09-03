/**
 * Authentication Service
 * Handles all authentication-related API calls
 * 
 * TODO: Implement the following features:
 * - Login API integration
 * - Registration API integration
 * - Token refresh functionality
 * - Logout API integration
 * - Profile management API calls
 * - Password change API integration
 * - Error handling and response parsing
 */

import { apiClient } from './apiClient'

export const authService = {
  /**
   * Login user with email and password
   * @param {string} email - User email
   * @param {string} password - User password
   * @returns {Promise<Object>} Login response with user data and tokens
   */
  async login(email, password) {
    try {
      const response = await apiClient.post('/auth/login', {
        email,
        password
      })
      
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed')
    }
  },

  /**
   * Register new user
   * @param {Object} userData - User registration data
   * @returns {Promise<Object>} Registration response with user data and tokens
   */
  async register(userData) {
    try {
      const response = await apiClient.post('/auth/register', userData)
      
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed')
    }
  },

  /**
   * Logout user
   * @returns {Promise<void>}
   */
  async logout() {
    try {
      await apiClient.post('/auth/logout')
    } catch (error) {
      // Logout should not fail even if API call fails
      console.error('Logout API call failed:', error)
    }
  },

  /**
   * Refresh access token
   * @param {string} refreshToken - Refresh token
   * @returns {Promise<Object>} New access token
   */
  async refreshToken(refreshToken) {
    try {
      const response = await apiClient.post('/auth/refresh', {
        refreshToken
      })
      
      return response.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Token refresh failed')
    }
  },

  /**
   * Get current user profile
   * @returns {Promise<Object>} User profile data
   */
  async getProfile() {
    try {
      const response = await apiClient.get('/auth/profile')
      
      return response.data.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get profile')
    }
  },

  /**
   * Update user profile
   * @param {Object} profileData - Profile data to update
   * @returns {Promise<Object>} Updated user profile
   */
  async updateProfile(profileData) {
    try {
      const response = await apiClient.put('/auth/profile', profileData)
      
      return response.data.data
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Profile update failed')
    }
  },

  /**
   * Change user password
   * @param {Object} passwordData - Password change data
   * @returns {Promise<void>}
   */
  async changePassword(passwordData) {
    try {
      await apiClient.post('/auth/change-password', passwordData)
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Password change failed')
    }
  },

  /**
   * Request password reset
   * @param {string} email - User email
   * @returns {Promise<void>}
   */
  async forgotPassword(email) {
    try {
      await apiClient.post('/auth/forgot-password', { email })
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Password reset request failed')
    }
  },

  /**
   * Reset password with token
   * @param {Object} resetData - Reset data with token and new password
   * @returns {Promise<void>}
   */
  async resetPassword(resetData) {
    try {
      await apiClient.post('/auth/reset-password', resetData)
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Password reset failed')
    }
  }
}
