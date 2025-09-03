/**
 * Protected Route Component
 * Wrapper component that protects routes requiring authentication
 * 
 * TODO: Implement the following features:
 * - Check if user is authenticated
 * - Redirect to login if not authenticated
 * - Show loading state while checking authentication
 * - Handle token expiration
 * - Optional role-based access control
 */

import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Check role-based access if required
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />
  }

  // Render protected content
  return children
}

export default ProtectedRoute
