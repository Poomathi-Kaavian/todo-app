/**
 * Todo Statistics Component
 * Displays statistics and progress indicators for todos
 * 
 * TODO: Implement the following features:
 * - Calculate and display todo statistics
 * - Progress bars and charts
 * - Completion percentage
 * - Priority distribution
 * - Overdue todos count
 * - Recent activity indicators
 * - Animated counters
 */

import { CheckCircle, Clock, AlertTriangle, TrendingUp } from 'lucide-react'

const TodoStats = ({ todos = [] }) => {
  // Calculate statistics
  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length
  const pendingTodos = totalTodos - completedTodos
  const overdueTodos = todos.filter(todo => {
    if (todo.completed || !todo.dueDate) return false
    return new Date(todo.dueDate) < new Date()
  }).length

  const highPriorityTodos = todos.filter(todo => todo.priority === 'high' && !todo.completed).length
  const mediumPriorityTodos = todos.filter(todo => todo.priority === 'medium' && !todo.completed).length
  const lowPriorityTodos = todos.filter(todo => todo.priority === 'low' && !todo.completed).length

  const completionPercentage = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0

  const stats = [
    {
      name: 'Total Todos',
      value: totalTodos,
      icon: CheckCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Completed',
      value: completedTodos,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      name: 'Pending',
      value: pendingTodos,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      name: 'Overdue',
      value: overdueTodos,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ]

  const priorityStats = [
    { name: 'High Priority', value: highPriorityTodos, color: 'bg-red-500' },
    { name: 'Medium Priority', value: mediumPriorityTodos, color: 'bg-yellow-500' },
    { name: 'Low Priority', value: lowPriorityTodos, color: 'bg-green-500' }
  ]

  return (
    <div className="space-y-6">
      {/* Main Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.name} className="card">
              <div className="card-body">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress and Priority Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Completion Progress */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Progress Overview
            </h3>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Completion Rate</span>
                  <span>{completionPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Progress Text */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {completedTodos} of {totalTodos} todos completed
                </p>
                {completionPercentage === 100 && totalTodos > 0 && (
                  <p className="text-green-600 font-medium mt-2">
                    🎉 All todos completed! Great job!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Priority Distribution */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900">Priority Distribution</h3>
          </div>
          <div className="card-body">
            <div className="space-y-3">
              {priorityStats.map((priority) => {
                const percentage = pendingTodos > 0 ? Math.round((priority.value / pendingTodos) * 100) : 0
                return (
                  <div key={priority.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{priority.name}</span>
                      <span className="font-medium text-gray-900">{priority.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${priority.color} h-2 rounded-full transition-all duration-500 ease-out`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Insights */}
      {totalTodos > 0 && (
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900">Quick Insights</h3>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {overdueTodos > 0 && (
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span>{overdueTodos} overdue todo{overdueTodos !== 1 ? 's' : ''}</span>
                </div>
              )}
              
              {highPriorityTodos > 0 && (
                <div className="flex items-center text-red-600">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  <span>{highPriorityTodos} high priority todo{highPriorityTodos !== 1 ? 's' : ''}</span>
                </div>
              )}
              
              {completionPercentage >= 80 && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Great progress! Keep it up!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TodoStats
