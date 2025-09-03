/**
 * Profile Page Component
 * User profile management and settings
 * 
 * TODO: Implement the following features:
 * - Display user profile information
 * - Edit profile form (name, email)
 * - Change password functionality
 * - Account settings and preferences
 * - Profile picture upload
 * - Account deletion option
 * - Export user data
 */

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { User, Mail, Lock, Settings, Trash2, Download } from 'lucide-react'
import toast from 'react-hot-toast'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [isLoading, setIsLoading] = useState(false)

  // TODO: Replace with actual user data from context/API
  const mockUser = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    createdAt: '2024-01-01T00:00:00.000Z'
  }

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: profileErrors },
  } = useForm({
    defaultValues: {
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
      email: mockUser.email
    }
  })

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    watch,
    formState: { errors: passwordErrors },
    reset: resetPassword
  } = useForm()

  const newPassword = watch('newPassword')

  const onProfileSubmit = async (data) => {
    setIsLoading(true)
    try {
      // TODO: Implement update profile API call
      console.log('Updating profile:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Profile updated successfully!')
    } catch (error) {
      toast.error('Failed to update profile. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const onPasswordSubmit = async (data) => {
    setIsLoading(true)
    try {
      // TODO: Implement change password API call
      console.log('Changing password:', data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Password changed successfully!')
      resetPassword()
    } catch (error) {
      toast.error('Failed to change password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleExportData = async () => {
    try {
      // TODO: Implement data export functionality
      console.log('Exporting user data...')
      toast.success('Data export started. You will receive an email when ready.')
    } catch (error) {
      toast.error('Failed to export data. Please try again.')
    }
  }

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        // TODO: Implement account deletion
        console.log('Deleting account...')
        toast.success('Account deletion initiated. You will receive a confirmation email.')
      } catch (error) {
        toast.error('Failed to delete account. Please try again.')
      }
    }
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'password', label: 'Password', icon: Lock },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="mt-2 text-gray-600">
            Manage your account information and preferences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="card">
              <div className="card-body">
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Profile Information
                    </h2>
                    
                    <form onSubmit={handleSubmitProfile(onProfileSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            {...registerProfile('firstName', {
                              required: 'First name is required',
                              minLength: {
                                value: 2,
                                message: 'First name must be at least 2 characters'
                              }
                            })}
                            type="text"
                            className="form-input"
                          />
                          {profileErrors.firstName && (
                            <p className="form-error">{profileErrors.firstName.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            {...registerProfile('lastName', {
                              required: 'Last name is required',
                              minLength: {
                                value: 2,
                                message: 'Last name must be at least 2 characters'
                              }
                            })}
                            type="text"
                            className="form-input"
                          />
                          {profileErrors.lastName && (
                            <p className="form-error">{profileErrors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          {...registerProfile('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          type="email"
                          className="form-input"
                        />
                        {profileErrors.email && (
                          <p className="form-error">{profileErrors.email.message}</p>
                        )}
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="btn-primary"
                        >
                          {isLoading ? 'Updating...' : 'Update Profile'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Password Tab */}
                {activeTab === 'password' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Change Password
                    </h2>
                    
                    <form onSubmit={handleSubmitPassword(onPasswordSubmit)} className="space-y-6">
                      <div>
                        <label htmlFor="currentPassword" className="form-label">
                          Current Password
                        </label>
                        <input
                          {...registerPassword('currentPassword', {
                            required: 'Current password is required'
                          })}
                          type="password"
                          className="form-input"
                        />
                        {passwordErrors.currentPassword && (
                          <p className="form-error">{passwordErrors.currentPassword.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="newPassword" className="form-label">
                          New Password
                        </label>
                        <input
                          {...registerPassword('newPassword', {
                            required: 'New password is required',
                            minLength: {
                              value: 8,
                              message: 'Password must be at least 8 characters'
                            },
                            pattern: {
                              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                              message: 'Password must contain uppercase, lowercase, number, and special character'
                            }
                          })}
                          type="password"
                          className="form-input"
                        />
                        {passwordErrors.newPassword && (
                          <p className="form-error">{passwordErrors.newPassword.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm New Password
                        </label>
                        <input
                          {...registerPassword('confirmPassword', {
                            required: 'Please confirm your new password',
                            validate: value => value === newPassword || 'Passwords do not match'
                          })}
                          type="password"
                          className="form-input"
                        />
                        {passwordErrors.confirmPassword && (
                          <p className="form-error">{passwordErrors.confirmPassword.message}</p>
                        )}
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="btn-primary"
                        >
                          {isLoading ? 'Changing...' : 'Change Password'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Account Settings
                    </h2>
                    
                    <div className="space-y-6">
                      {/* Data Export */}
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              Export Data
                            </h3>
                            <p className="text-sm text-gray-600">
                              Download a copy of your data including todos and profile information
                            </p>
                          </div>
                          <button
                            onClick={handleExportData}
                            className="btn-outline flex items-center gap-2"
                          >
                            <Download className="h-4 w-4" />
                            Export
                          </button>
                        </div>
                      </div>

                      {/* Account Deletion */}
                      <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-red-900">
                              Delete Account
                            </h3>
                            <p className="text-sm text-red-700">
                              Permanently delete your account and all associated data
                            </p>
                          </div>
                          <button
                            onClick={handleDeleteAccount}
                            className="btn-error flex items-center gap-2"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
