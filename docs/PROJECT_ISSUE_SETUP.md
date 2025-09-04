# Project and Issue Setup Guide

## Overview
This guide will help you link the project to the repository, create issues, and assign them to team members.

## Step 1: Link Project to Repository (Try First)

### Method A: From Repository Side
1. **Go to**: https://github.com/Poomathi-Kaavian/todo-app
2. **Click**: "Projects" tab
3. **Click**: "Link a project"
4. **Select**: "TODO App Development Tasks" project
5. **Click**: "Link project"

### Method B: From Project Side
1. **Go to**: https://github.com/users/Poomathi-Kaavian/projects/2
2. **Click**: Project settings (gear icon)
3. **Go to**: "Repositories" section
4. **Click**: "Add repository"
5. **Search for**: `Poomathi-Kaavian/todo-app`
6. **Select** and **Add** the repository

## Step 2: Create New Project (If Linking Fails)

If the above methods don't work, create a new project inside the repository:

1. **Go to**: https://github.com/Poomathi-Kaavian/todo-app
2. **Click**: "Projects" tab
3. **Click**: "New project"
4. **Select**: "Team planning" template
5. **Name**: "TODO App Development"
6. **Description**: "Project board for managing MERN Stack TODO Application development tasks"
7. **Click**: "Create project"

## Step 3: Create All Issues

### Backend Issues

#### Issue 1: DB Connection & Schema setup
- **Title**: DB Connection & Schema setup
- **Body**: 
  ```
  Set up MongoDB connection and create Todo and User schemas with Mongoose.
  
  **Assigned to**: Kokila
  **Priority**: High
  **Labels**: backend, database, setup
  ```
- **Assignee**: Kokila-Kaavian
- **Labels**: backend, database, setup

#### Issue 2: Get all todo API
- **Title**: Get all todo API
- **Body**: 
  ```
  Implement GET /api/todos endpoint to retrieve all todos.
  
  **Assigned to**: Samsuthin
  **Priority**: High
  **Labels**: backend, api, crud
  ```
- **Assignee**: Samsuthin-Kaavian
- **Labels**: backend, api, crud

#### Issue 3: Create todo API
- **Title**: Create todo API
- **Body**: 
  ```
  Implement POST /api/todos endpoint to create new todos.
  
  **Assigned to**: me
  **Priority**: High
  **Labels**: backend, api, crud
  ```
- **Assignee**: Poomathi-Kaavian
- **Labels**: backend, api, crud

#### Issue 4: Update todo API
- **Title**: Update todo API
- **Body**: 
  ```
  Implement PUT /api/todos/:id endpoint to update existing todos.
  
  **Assigned to**: Kokila
  **Priority**: Medium
  **Labels**: backend, api, crud
  ```
- **Assignee**: Kokila-Kaavian
- **Labels**: backend, api, crud

#### Issue 5: Delete todo API
- **Title**: Delete todo API
- **Body**: 
  ```
  Implement DELETE /api/todos/:id endpoint to delete todos.
  
  **Assigned to**: Samsuthin
  **Priority**: Medium
  **Labels**: backend, api, crud
  ```
- **Assignee**: Samsuthin-Kaavian
- **Labels**: backend, api, crud

### Frontend Issues

#### Issue 6: Display all todo UI
- **Title**: Display all todo UI
- **Body**: 
  ```
  Create React component to display all todos in a list format.
  
  **Assigned to**: Samsuthin
  **Priority**: High
  **Labels**: frontend, ui, display
  ```
- **Assignee**: Samsuthin-Kaavian
- **Labels**: frontend, ui, display

#### Issue 7: Add todo UI
- **Title**: Add todo UI
- **Body**: 
  ```
  Create React form component to add new todos.
  
  **Assigned to**: me
  **Priority**: High
  **Labels**: frontend, ui, form
  ```
- **Assignee**: Poomathi-Kaavian
- **Labels**: frontend, ui, form

#### Issue 8: Update todo UI
- **Title**: Update todo UI
- **Body**: 
  ```
  Create React component to edit and update existing todos.
  
  **Assigned to**: Kokila
  **Priority**: Medium
  **Labels**: frontend, ui, edit
  ```
- **Assignee**: Kokila-Kaavian
- **Labels**: frontend, ui, edit

#### Issue 9: Delete todo UI
- **Title**: Delete todo UI
- **Body**: 
  ```
  Create React component with delete functionality for todos.
  
  **Assigned to**: me
  **Priority**: Medium
  **Labels**: frontend, ui, delete
  ```
- **Assignee**: Poomathi-Kaavian
- **Labels**: frontend, ui, delete

## Step 4: Add Issues to Project Board

### Method A: From Issues Page
1. **Go to**: https://github.com/Poomathi-Kaavian/todo-app/issues
2. **For each issue**:
   - Click on the issue
   - Click "Projects" in the right sidebar
   - Select the project (either "TODO App Development Tasks" or "TODO App Development")
   - Click "Add to project"

### Method B: From Project Board
1. **Go to**: Project board URL
2. **Click**: "+" button or "Add item"
3. **Select**: "Issue"
4. **Search for**: Each issue by number or title
5. **Add** to project

## Step 5: Verify Setup

### Check Repository
- **URL**: https://github.com/Poomathi-Kaavian/todo-app
- **Verify**: Project appears in "Projects" tab
- **Verify**: All 9 issues are created
- **Verify**: Issues are assigned to correct team members

### Check Project Board
- **Verify**: All 9 issues appear as project items
- **Verify**: Repository is linked
- **Verify**: Tasks are in "Todo" column

## Team Member Assignments

### Kokila-Kaavian (Admin) - 3 tasks:
- Issue #1: DB Connection & Schema setup
- Issue #4: Update todo API
- Issue #8: Update todo UI

### Samsuthin-Kaavian (Write) - 3 tasks:
- Issue #2: Get all todo API
- Issue #5: Delete todo API
- Issue #6: Display all todo UI

### Poomathi-Kaavian (Owner) - 3 tasks:
- Issue #3: Create todo API
- Issue #7: Add todo UI
- Issue #9: Delete todo UI

## Benefits of This Setup

1. **Repository Integration**: Issues are linked to the codebase
2. **Project Tracking**: All tasks visible in project board
3. **Team Collaboration**: Clear assignments and progress tracking
4. **Code Integration**: Pull requests can be linked to issues
5. **Progress Visibility**: Team can see overall project status

## Next Steps After Setup

1. **Team members** can start working on assigned issues
2. **Create branches** for each issue
3. **Link pull requests** to issues when work is complete
4. **Move issues** between project columns as work progresses
5. **Use project board** for daily standups and progress tracking

## Troubleshooting

### If Project Linking Fails:
- Create a new project inside the repository
- Use the repository-specific project for better integration

### If Issues Don't Appear in Project:
- Refresh the project board page
- Check that issues are properly assigned
- Verify the project is linked to the repository

### If Assignments Don't Work:
- Ensure team members have accepted repository invitations
- Check that usernames are spelled correctly
- Verify team members have appropriate access levels
