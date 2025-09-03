/**
 * Application Constants
 * Centralized constants for the application
 */

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
}

// Todo Priorities
export const TODO_PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
}

export const PRIORITY_LABELS = {
  [TODO_PRIORITIES.LOW]: 'Low Priority',
  [TODO_PRIORITIES.MEDIUM]: 'Medium Priority',
  [TODO_PRIORITIES.HIGH]: 'High Priority',
}

export const PRIORITY_COLORS = {
  [TODO_PRIORITIES.LOW]: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-500',
    icon: '🟢',
  },
  [TODO_PRIORITIES.MEDIUM]: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-500',
    icon: '🟡',
  },
  [TODO_PRIORITIES.HIGH]: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-500',
    icon: '🔴',
  },
}

// Todo Status
export const TODO_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
}

export const STATUS_LABELS = {
  [TODO_STATUS.PENDING]: 'Pending',
  [TODO_STATUS.COMPLETED]: 'Completed',
}

// Sort Options
export const SORT_OPTIONS = {
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt',
  DUE_DATE: 'dueDate',
  PRIORITY: 'priority',
  TITLE: 'title',
}

export const SORT_LABELS = {
  [SORT_OPTIONS.CREATED_AT]: 'Date Created',
  [SORT_OPTIONS.UPDATED_AT]: 'Last Updated',
  [SORT_OPTIONS.DUE_DATE]: 'Due Date',
  [SORT_OPTIONS.PRIORITY]: 'Priority',
  [SORT_OPTIONS.TITLE]: 'Title',
}

// Sort Order
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
}

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
}

// Form Validation
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  TITLE_MAX_LENGTH: 100,
  DESCRIPTION_MAX_LENGTH: 500,
  NAME_MAX_LENGTH: 50,
  EMAIL_MAX_LENGTH: 100,
}

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy',
  DISPLAY_WITH_TIME: 'MMM dd, yyyy h:mm a',
  API: 'yyyy-MM-dd',
  API_WITH_TIME: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
}

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
}

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNKNOWN_ERROR: 'An unexpected error occurred.',
}

// Success Messages
export const SUCCESS_MESSAGES = {
  TODO_CREATED: 'Todo created successfully!',
  TODO_UPDATED: 'Todo updated successfully!',
  TODO_DELETED: 'Todo deleted successfully!',
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logout successful!',
  REGISTRATION_SUCCESS: 'Registration successful!',
}

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOT_FOUND: '/404',
}

// User Roles
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
}

// Theme Options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
}

// Language Options
export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
}

export const LANGUAGE_LABELS = {
  [LANGUAGES.EN]: 'English',
  [LANGUAGES.ES]: 'Español',
  [LANGUAGES.FR]: 'Français',
}
