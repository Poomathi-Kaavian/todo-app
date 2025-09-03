/**
 * Todo Filters Component
 * Filter and sort controls for todo list
 * 
 * TODO: Implement the following features:
 * - Status filter (all, completed, pending)
 * - Priority filter (all, high, medium, low)
 * - Sort options (date, priority, title)
 * - Sort order (ascending, descending)
 * - Clear filters functionality
 * - Filter state persistence
 * - Advanced filters (date range, tags)
 */

import { useState } from 'react'
import { Filter, SortAsc, SortDesc, X } from 'lucide-react'

const TodoFilters = ({ filters, onFiltersChange }) => {
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      status: 'all',
      priority: 'all',
      sortBy: 'createdAt',
      sortOrder: 'desc'
    })
  }

  const hasActiveFilters = filters.status !== 'all' || filters.priority !== 'all'

  return (
    <div className="flex items-center space-x-2">
      {/* Status Filter */}
      <select
        value={filters.status}
        onChange={(e) => handleFilterChange('status', e.target.value)}
        className="form-input text-sm py-2 px-3"
      >
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      {/* Priority Filter */}
      <select
        value={filters.priority}
        onChange={(e) => handleFilterChange('priority', e.target.value)}
        className="form-input text-sm py-2 px-3"
      >
        <option value="all">All Priority</option>
        <option value="high">High Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="low">Low Priority</option>
      </select>

      {/* Sort By */}
      <select
        value={filters.sortBy}
        onChange={(e) => handleFilterChange('sortBy', e.target.value)}
        className="form-input text-sm py-2 px-3"
      >
        <option value="createdAt">Sort by Date</option>
        <option value="updatedAt">Sort by Updated</option>
        <option value="dueDate">Sort by Due Date</option>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>

      {/* Sort Order */}
      <button
        onClick={() => handleFilterChange('sortOrder', filters.sortOrder === 'asc' ? 'desc' : 'asc')}
        className="btn-outline text-sm py-2 px-3 flex items-center gap-1"
        title={`Sort ${filters.sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
      >
        {filters.sortOrder === 'asc' ? (
          <SortAsc className="h-4 w-4" />
        ) : (
          <SortDesc className="h-4 w-4" />
        )}
      </button>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="btn-ghost text-sm py-2 px-3 flex items-center gap-1 text-gray-500 hover:text-gray-700"
          title="Clear all filters"
        >
          <X className="h-4 w-4" />
          Clear
        </button>
      )}

      {/* Advanced Filters Toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className={`btn-outline text-sm py-2 px-3 flex items-center gap-1 ${
          showAdvanced ? 'bg-primary-50 text-primary-700 border-primary-300' : ''
        }`}
        title="Advanced filters"
      >
        <Filter className="h-4 w-4" />
        Advanced
      </button>

      {/* Advanced Filters Panel */}
      {showAdvanced && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">Advanced Filters</h4>
              <button
                onClick={() => setShowAdvanced(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Date Range Filter */}
            <div>
              <label className="form-label text-sm">Date Range</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  className="form-input text-sm"
                  placeholder="From"
                />
                <input
                  type="date"
                  className="form-input text-sm"
                  placeholder="To"
                />
              </div>
            </div>

            {/* Tags Filter */}
            <div>
              <label className="form-label text-sm">Tags</label>
              <input
                type="text"
                className="form-input text-sm"
                placeholder="Filter by tags (comma separated)"
              />
            </div>

            {/* Quick Filters */}
            <div>
              <label className="form-label text-sm">Quick Filters</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-700">Overdue todos</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-700">Due today</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-700">Due this week</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-2 border-t border-gray-200">
              <button
                onClick={() => setShowAdvanced(false)}
                className="btn-outline text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAdvanced(false)}
                className="btn-primary text-sm"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoFilters
