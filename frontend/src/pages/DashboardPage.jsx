/**
 * Dashboard Page Component
 * Main page displaying all todos with CRUD operations
 * 
 * TODO: Implement the following features:
 * - Display all todos in a responsive grid/list layout
 * - Add new todo functionality
 * - Edit existing todos
 * - Delete todos with confirmation
 * - Mark todos as complete/incomplete
 * - Filter todos by status, priority, and search
 * - Sort todos by various criteria
 * - Pagination for large todo lists
 * - Bulk operations (select multiple todos)
 * - Todo statistics and progress indicators
 */

import { useState } from 'react'
import { Plus, Search, Filter, SortAsc, MoreVertical } from 'lucide-react'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'
import TodoStats from '../components/TodoStats'
import TodoFilters from '../components/TodoFilters'

const DashboardPage = () => {
  const [showTodoForm, setShowTodoForm] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    status: 'all', // all, completed, pending
    priority: 'all', // all, high, medium, low
    sortBy: 'createdAt', // createdAt, updatedAt, dueDate, priority, title
    sortOrder: 'desc' // asc, desc
  })

  // TODO: Replace with actual data from API
  const mockTodos = [
    {
      id: '1',
      title: 'Complete project documentation',
      description: 'Write comprehensive documentation for the TODO API including setup instructions and usage examples.',
      completed: false,
      priority: 'high',
      dueDate: '2024-12-31T23:59:59.000Z',
      createdAt: '2024-01-15T10:00:00.000Z',
      updatedAt: '2024-01-15T10:00:00.000Z'
    },
    {
      id: '2',
      title: 'Review code changes',
      description: 'Review all pending pull requests and provide feedback to team members.',
      completed: true,
      priority: 'medium',
      dueDate: '2024-01-20T17:00:00.000Z',
      createdAt: '2024-01-14T14:30:00.000Z',
      updatedAt: '2024-01-16T09:15:00.000Z'
    },
    {
      id: '3',
      title: 'Update dependencies',
      description: 'Update all project dependencies to their latest versions and test for compatibility.',
      completed: false,
      priority: 'low',
      dueDate: null,
      createdAt: '2024-01-13T16:45:00.000Z',
      updatedAt: '2024-01-13T16:45:00.000Z'
    }
  ]

  const handleCreateTodo = (todoData) => {
    // TODO: Implement create todo API call
    console.log('Creating todo:', todoData)
    setShowTodoForm(false)
  }

  const handleUpdateTodo = (todoId, todoData) => {
    // TODO: Implement update todo API call
    console.log('Updating todo:', todoId, todoData)
    setEditingTodo(null)
  }

  const handleDeleteTodo = (todoId) => {
    // TODO: Implement delete todo API call
    console.log('Deleting todo:', todoId)
  }

  const handleToggleComplete = (todoId) => {
    // TODO: Implement toggle complete API call
    console.log('Toggling complete for todo:', todoId)
  }

  const handleBulkAction = (action, todoIds) => {
    // TODO: Implement bulk actions (delete, mark complete, etc.)
    console.log('Bulk action:', action, todoIds)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Todos</h1>
              <p className="mt-2 text-gray-600">
                Manage your tasks and stay organized
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <button
                onClick={() => setShowTodoForm(true)}
                className="btn-primary flex items-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Add Todo
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8">
          <TodoStats todos={mockTodos} />
        </div>

        {/* Filters and Search */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search todos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
              <TodoFilters
                filters={filters}
                onFiltersChange={setFilters}
              />
            </div>
          </div>
        </div>

        {/* Todo List */}
        <div className="card">
          <div className="card-body p-0">
            <TodoList
              todos={mockTodos}
              onEdit={setEditingTodo}
              onDelete={handleDeleteTodo}
              onToggleComplete={handleToggleComplete}
              onBulkAction={handleBulkAction}
              filters={filters}
              searchTerm={searchTerm}
            />
          </div>
        </div>

        {/* Todo Form Modal */}
        {showTodoForm && (
          <TodoForm
            isOpen={showTodoForm}
            onClose={() => setShowTodoForm(false)}
            onSubmit={handleCreateTodo}
            title="Add New Todo"
          />
        )}

        {/* Edit Todo Modal */}
        {editingTodo && (
          <TodoForm
            isOpen={!!editingTodo}
            onClose={() => setEditingTodo(null)}
            onSubmit={(data) => handleUpdateTodo(editingTodo.id, data)}
            todo={editingTodo}
            title="Edit Todo"
          />
        )}
      </div>
    </div>
  )
}

export default DashboardPage
