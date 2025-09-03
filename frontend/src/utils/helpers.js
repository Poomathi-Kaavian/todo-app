/**
 * Utility Helper Functions
 * Common utility functions used throughout the application
 */

import { format, parseISO, isValid, differenceInDays, isAfter, isBefore } from 'date-fns'
import { TODO_PRIORITIES, PRIORITY_COLORS, DATE_FORMATS } from './constants'

/**
 * Format date for display
 * @param {string|Date} date - Date to format
 * @param {string} formatString - Format string (default: DATE_FORMATS.DISPLAY)
 * @returns {string} Formatted date string
 */
export const formatDate = (date, formatString = DATE_FORMATS.DISPLAY) => {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    
    if (!isValid(dateObj)) {
      return 'Invalid date'
    }
    
    return format(dateObj, formatString)
  } catch (error) {
    console.error('Date formatting error:', error)
    return 'Invalid date'
  }
}

/**
 * Get relative time string (e.g., "2 days ago", "in 3 hours")
 * @param {string|Date} date - Date to compare
 * @returns {string} Relative time string
 */
export const getRelativeTime = (date) => {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    
    if (!isValid(dateObj)) {
      return 'Invalid date'
    }
    
    const now = new Date()
    const diffInDays = differenceInDays(now, dateObj)
    
    if (diffInDays === 0) {
      return 'Today'
    } else if (diffInDays === 1) {
      return 'Yesterday'
    } else if (diffInDays > 1 && diffInDays <= 7) {
      return `${diffInDays} days ago`
    } else if (diffInDays > 7) {
      return formatDate(dateObj)
    } else if (diffInDays < 0) {
      const futureDays = Math.abs(diffInDays)
      if (futureDays === 1) {
        return 'Tomorrow'
      } else if (futureDays <= 7) {
        return `In ${futureDays} days`
      } else {
        return formatDate(dateObj)
      }
    }
    
    return formatDate(dateObj)
  } catch (error) {
    console.error('Relative time error:', error)
    return 'Invalid date'
  }
}

/**
 * Check if a date is overdue
 * @param {string|Date} dueDate - Due date to check
 * @param {boolean} completed - Whether the todo is completed
 * @returns {boolean} True if overdue
 */
export const isOverdue = (dueDate, completed = false) => {
  if (!dueDate || completed) return false
  
  try {
    const due = typeof dueDate === 'string' ? parseISO(dueDate) : dueDate
    const now = new Date()
    
    return isBefore(due, now)
  } catch (error) {
    console.error('Overdue check error:', error)
    return false
  }
}

/**
 * Get priority color classes
 * @param {string} priority - Priority level
 * @returns {Object} Color classes object
 */
export const getPriorityColors = (priority) => {
  return PRIORITY_COLORS[priority] || PRIORITY_COLORS[TODO_PRIORITIES.MEDIUM]
}

/**
 * Get priority icon
 * @param {string} priority - Priority level
 * @returns {string} Priority icon
 */
export const getPriorityIcon = (priority) => {
  return getPriorityColors(priority).icon
}

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export const capitalize = (str) => {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * Generate initials from name
 * @param {string} firstName - First name
 * @param {string} lastName - Last name
 * @returns {string} Initials
 */
export const getInitials = (firstName, lastName) => {
  if (!firstName && !lastName) return '?'
  
  const first = firstName ? firstName.charAt(0).toUpperCase() : ''
  const last = lastName ? lastName.charAt(0).toUpperCase() : ''
  
  return first + last
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Generate random ID
 * @param {number} length - Length of ID
 * @returns {string} Random ID
 */
export const generateId = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return emailRegex.test(email)
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with score and feedback
 */
export const validatePassword = (password) => {
  const result = {
    score: 0,
    feedback: [],
    isValid: false
  }
  
  if (!password) {
    result.feedback.push('Password is required')
    return result
  }
  
  if (password.length >= 8) {
    result.score += 1
  } else {
    result.feedback.push('Password must be at least 8 characters long')
  }
  
  if (/[a-z]/.test(password)) {
    result.score += 1
  } else {
    result.feedback.push('Password must contain at least one lowercase letter')
  }
  
  if (/[A-Z]/.test(password)) {
    result.score += 1
  } else {
    result.feedback.push('Password must contain at least one uppercase letter')
  }
  
  if (/\d/.test(password)) {
    result.score += 1
  } else {
    result.feedback.push('Password must contain at least one number')
  }
  
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    result.score += 1
  } else {
    result.feedback.push('Password must contain at least one special character')
  }
  
  result.isValid = result.score >= 4
  
  return result
}

/**
 * Format file size
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Get contrast color (black or white) for given background color
 * @param {string} hexColor - Hex color code
 * @returns {string} 'black' or 'white'
 */
export const getContrastColor = (hexColor) => {
  // Remove # if present
  const hex = hexColor.replace('#', '')
  
  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  return luminance > 0.5 ? 'black' : 'white'
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy to clipboard:', error)
    return false
  }
}

/**
 * Download data as JSON file
 * @param {Object} data - Data to download
 * @param {string} filename - Filename for download
 */
export const downloadJSON = (data, filename = 'data.json') => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
