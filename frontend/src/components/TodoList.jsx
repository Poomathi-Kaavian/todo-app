/**
 * Todo List Component
 * Displays a list of todos with CRUD operations
 * 
 * TODO: Implement the following features:
 * - Display todos in grid or list layout
 * - Todo item components with all properties
 * - Edit, delete, and toggle complete actions
 * - Bulk selection and operations
 * - Empty state when no todos
 * - Loading states and skeletons
 * - Responsive design for mobile/desktop
 */

import { useState } from 'react'
import { Check, Edit, Trash2, MoreVertical, Calendar, Flag } from 'lucide-react'
import { format } from 'date-fns'

const TodoList = ({ 
  todos, 
  onEdit, 
  onDelete, 
  onToggleComplete, 
  onBulkAction,
  filters,
  searchTerm 
}) => {
  const [selectedTodos, setSelectedTodos] = useState([])
  const [showBulkActions, setShowBulkActions] = useState(false)

  // TODO: Implement filtering and searching logic
  const filteredTodos = todos

  const handleSelectTodo = (todoId) => {
    setSelectedTodos(prev => 
      prev.includes(todoId) 
        ? prev.filter(id => id !== todoId)
        : [...prev, todoId]
    )
  }

  const handleSelectAll = () => {
    if (selectedTodos.length === filteredTodos.length) {
      setSelectedTodos([])
    } else {
      setSelectedTodos(filteredTodos.map(todo => todo.id))
    }
  }

  const handleBulkDelete = () => {
    if (window.confirm(`Delete ${selectedTodos.length} todos?`)) {
      onBulkAction('delete', selectedTodos)
      setSelectedTodos([])
    }
  }

  const handleBulkComplete = () => {
    onBulkAction('complete', selectedTodos)
    setSelectedTodos([])
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'priority-high'
      case 'medium': return 'priority-medium'
      case 'low': return 'priority-low'
      default: return 'priority-medium'
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

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No todos found</h3>
        <p className="text-gray-500">
          {searchTerm ? 'Try adjusting your search terms.' : 'Get started by creating your first todo.'}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Bulk Actions */}
      {selectedTodos.length > 0 && (
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary-700">
              {selectedTodos.length} todo{selectedTodos.length !== 1 ? 's' : ''} selected
            </span>
            <div className="flex space-x-2">
              <button
                onClick={handleBulkComplete}
                className="btn-success text-sm"
              >
                Mark Complete
              </button>
              <button
                onClick={handleBulkDelete}
                className="btn-error text-sm"
              >
                Delete
              </button>
              <button
                onClick={() => setSelectedTodos([])}
                className="btn-outline text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Todo Items */}
      <div className="space-y-3">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className={`todo-item ${todo.priority}-priority ${todo.completed ? 'completed' : ''}`}
          >
            {/* Selection checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTodos.includes(todo.id)}
                onChange={() => handleSelectTodo(todo.id)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
            </div>

            {/* Completion checkbox */}
            <div className="flex items-center">
              <button
                onClick={() => onToggleComplete(todo.id)}
                className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  todo.completed
                    ? 'bg-success-500 border-success-500 text-white'
                    : 'border-gray-300 hover:border-success-500'
                }`}
              >
                {todo.completed && <Check className="h-4 w-4" />}
              </button>
            </div>

            {/* Todo content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {todo.title}
                  </h3>
                  <p className={`mt-1 text-sm ${todo.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                    {todo.description}
                  </p>
                  
                  {/* Todo metadata */}
                  <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500">
                    <span className={`priority-badge ${getPriorityColor(todo.priority)}`}>
                      {getPriorityIcon(todo.priority)} {todo.priority}
                    </span>
                    
                    {todo.dueDate && (
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {format(new Date(todo.dueDate), 'MMM dd, yyyy')}
                      </div>
                    )}
                    
                    <div>
                      Created {format(new Date(todo.createdAt), 'MMM dd, yyyy')}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => onEdit(todo)}
                    className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                    title="Edit todo"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="p-2 text-gray-400 hover:text-error-600 transition-colors"
                    title="Delete todo"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
