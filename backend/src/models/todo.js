/**
 * Todo model
 * Defines the todo schema and methods for MongoDB
 */

const mongoose = require('mongoose');

// Todo schema definition
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  completed: {
    type: Boolean,
    default: false
  },
  priority: {
    type: String,
    enum: {
      values: ['low', 'medium', 'high'],
      message: 'Priority must be low, medium, or high'
    },
    default: 'medium'
  },
  dueDate: {
    type: Date
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required']
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [20, 'Tag cannot exceed 20 characters']
  }],
  isArchived: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for completion status
todoSchema.virtual('isOverdue').get(function() {
  if (!this.dueDate || this.completed) return false;
  return new Date() > this.dueDate;
});

// Virtual for days until due
todoSchema.virtual('daysUntilDue').get(function() {
  if (!this.dueDate) return null;
  const today = new Date();
  const due = new Date(this.dueDate);
  const diffTime = due - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// Indexes for better query performance
todoSchema.index({ userId: 1, createdAt: -1 });
todoSchema.index({ userId: 1, completed: 1 });
todoSchema.index({ userId: 1, priority: 1 });
todoSchema.index({ userId: 1, dueDate: 1 });
todoSchema.index({ title: 'text', description: 'text' });

// Pre-save middleware
todoSchema.pre('save', function(next) {
  // Ensure tags are unique and lowercase
  if (this.tags && this.tags.length > 0) {
    this.tags = [...new Set(this.tags.map(tag => tag.toLowerCase()))];
  }
  next();
});

// Instance method to mark as complete
todoSchema.methods.markComplete = function() {
  this.completed = true;
  return this.save();
};

// Instance method to mark as incomplete
todoSchema.methods.markIncomplete = function() {
  this.completed = false;
  return this.save();
};

// Instance method to archive
todoSchema.methods.archive = function() {
  this.isArchived = true;
  return this.save();
};

// Instance method to unarchive
todoSchema.methods.unarchive = function() {
  this.isArchived = false;
  return this.save();
};

// Static method to find todos by user
todoSchema.statics.findByUser = function(userId, options = {}) {
  const query = { userId, isArchived: false };
  
  if (options.completed !== undefined) {
    query.completed = options.completed;
  }
  
  if (options.priority) {
    query.priority = options.priority;
  }
  
  return this.find(query).sort({ createdAt: -1 });
};

// Static method to find overdue todos
todoSchema.statics.findOverdue = function(userId) {
  return this.find({
    userId,
    completed: false,
    dueDate: { $lt: new Date() },
    isArchived: false
  }).sort({ dueDate: 1 });
};

// Static method to search todos
todoSchema.statics.searchTodos = function(userId, searchTerm) {
  return this.find({
    userId,
    isArchived: false,
    $text: { $search: searchTerm }
  }).sort({ score: { $meta: 'textScore' } });
};

// Static method to get todo statistics
todoSchema.statics.getStats = function(userId) {
  return this.aggregate([
    { $match: { userId: mongoose.Types.ObjectId(userId), isArchived: false } },
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        completed: { $sum: { $cond: ['$completed', 1, 0] } },
        pending: { $sum: { $cond: ['$completed', 0, 1] } },
        highPriority: { $sum: { $cond: [{ $eq: ['$priority', 'high'] }, 1, 0] } },
        mediumPriority: { $sum: { $cond: [{ $eq: ['$priority', 'medium'] }, 1, 0] } },
        lowPriority: { $sum: { $cond: [{ $eq: ['$priority', 'low'] }, 1, 0] } }
      }
    }
  ]);
};

module.exports = mongoose.model('Todo', todoSchema);
