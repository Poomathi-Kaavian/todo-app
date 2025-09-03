/**
 * Todo Form Component
 * Modal form for creating and editing todos
 * 
 * TODO: Implement the following features:
 * - Form validation using react-hook-form
 * - Priority selection with visual indicators
 * - Due date picker with date validation
 * - Rich text editor for description
 * - Auto-save draft functionality
 * - Form submission with loading states
 * - Error handling and user feedback
 */

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { X, Calendar, Flag, Save } from 'lucide-react'
import { format } from 'date-fns'

const TodoForm = ({ isOpen, onClose, onSubmit, todo, title = "Add Todo" }) => {
  const [isLoading, setIsLoading] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      priority: 'medium',
      dueDate: '',
      completed: false
    }
  })

  const priority = watch('priority')

  useEffect(() => {
    if (todo) {
      setValue('title', todo.title)
      setValue('description', todo.description)
      setValue('priority', todo.priority)
      setValue('dueDate', todo.dueDate ? format(new Date(todo.dueDate), 'yyyy-MM-dd') : '')
      setValue('completed', todo.completed)
    } else {
      reset()
    }
  }, [todo, setValue, reset])

  const onFormSubmit = async (data) => {
    setIsLoading(true)
    try {
      // Convert due date to ISO string if provided
      if (data.dueDate) {
        data.dueDate = new Date(data.dueDate).toISOString()
      }
      
      await onSubmit(data)
      onClose()
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    onClose()
    reset()
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50'
      case 'medium': return 'border-yellow-500 bg-yellow-50'
      case 'low': return 'border-green-500 bg-green-50'
      default: return 'border-gray-300 bg-gray-50'
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔴'
      case 'medium': return '🟡'
      case 'low': return '🟢'
      default: return '🟡'
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={handleClose}
        ></div>

        {/* Modal */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Header */}
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">
                {title}
              </h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onFormSubmit)} className="px-6 py-4">
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label htmlFor="title" className="form-label">
                  Title *
                </label>
                <input
                  {...register('title', {
                    required: 'Title is required',
                    maxLength: {
                      value: 100,
                      message: 'Title must be less than 100 characters'
                    }
                  })}
                  type="text"
                  className="form-input"
                  placeholder="Enter todo title"
                />
                {errors.title && (
                  <p className="form-error">{errors.title.message}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="form-label">
                  Description *
                </label>
                <textarea
                  {...register('description', {
                    required: 'Description is required',
                    maxLength: {
                      value: 500,
                      message: 'Description must be less than 500 characters'
                    }
                  })}
                  rows={4}
                  className="form-input"
                  placeholder="Enter todo description"
                />
                {errors.description && (
                  <p className="form-error">{errors.description.message}</p>
                )}
              </div>

              {/* Priority and Due Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Priority */}
                <div>
                  <label htmlFor="priority" className="form-label">
                    Priority
                  </label>
                  <div className="space-y-2">
                    {['high', 'medium', 'low'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          {...register('priority')}
                          type="radio"
                          value={option}
                          className="sr-only"
                        />
                        <div
                          className={`w-full p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                            priority === option
                              ? getPriorityColor(option)
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setValue('priority', option)}
                        >
                          <div className="flex items-center">
                            <span className="text-lg mr-2">
                              {getPriorityIcon(option)}
                            </span>
                            <span className="capitalize font-medium">
                              {option} Priority
                            </span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Due Date */}
                <div>
                  <label htmlFor="dueDate" className="form-label">
                    Due Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register('dueDate', {
                        validate: (value) => {
                          if (!value) return true
                          const selectedDate = new Date(value)
                          const today = new Date()
                          today.setHours(0, 0, 0, 0)
                          return selectedDate >= today || 'Due date cannot be in the past'
                        }
                      })}
                      type="date"
                      className="form-input pl-10"
                    />
                  </div>
                  {errors.dueDate && (
                    <p className="form-error">{errors.dueDate.message}</p>
                  )}
                </div>
              </div>

              {/* Completion Status (for editing) */}
              {todo && (
                <div className="flex items-center">
                  <input
                    {...register('completed')}
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="completed" className="ml-2 block text-sm text-gray-900">
                    Mark as completed
                  </label>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleClose}
                className="btn-outline"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary flex items-center gap-2"
              >
                {isLoading ? (
                  <div className="loading-spinner h-4 w-4"></div>
                ) : (
                  <Save className="h-4 w-4" />
                )}
                {todo ? 'Update Todo' : 'Create Todo'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TodoForm
