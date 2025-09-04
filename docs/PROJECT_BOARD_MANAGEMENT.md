# Project Board Management Guide

## Overview
This guide explains how to manage the project board columns and move items to the "Todo" status while removing the "No Status" column.

## Step 1: Access the Project Board
1. **Go to**: https://github.com/users/Poomathi-Kaavian/projects/2
2. **Project Name**: "TODO App Development Tasks"

## Step 2: Move Items to Todo Column

### Method A: Drag and Drop (Recommended)
1. **View the project board** in board view (not table view)
2. **For each item** in the "No Status" column:
   - Click and drag the item
   - Drop it into the "Todo" column
   - The item will automatically get "Todo" status

### Method B: Edit Item Status
1. **Click on any item** in the project
2. **Click on the status field** (currently showing "No Status")
3. **Select "Todo"** from the dropdown
4. **Repeat for all items**

## Step 3: Remove "No Status" Column

### Option A: Hide the Column
1. **Click on the "No Status" column header**
2. **Click the three dots menu** (⋯)
3. **Select "Hide column"**
4. **Confirm the action**

### Option B: Delete the Column (if no items remain)
1. **Ensure all items are moved** to other columns
2. **Click on the "No Status" column header**
3. **Click the three dots menu** (⋯)
4. **Select "Delete column"**
5. **Confirm the deletion**

## Step 4: Verify the Setup

### Check Project Board
- **All items** should be in the "Todo" column
- **"No Status" column** should be hidden or removed
- **Status field** should show "Todo" for all items

### Expected Result
- **Todo Column**: Contains all 9 issues
- **In Progress Column**: Empty (ready for work)
- **Done Column**: Empty (ready for completed work)

## Current Project Items to Move

### Backend Tasks (Move to Todo):
1. **Issue #1**: DB Connection & Schema setup (Kokila)
2. **Issue #2**: Get all todo API (Samsuthin)
3. **Issue #4**: Create todo API (Poomathi)
4. **Issue #6**: Update todo API (Kokila)
5. **Issue #8**: Delete todo API (Samsuthin)

### Frontend Tasks (Move to Todo):
6. **Issue #3**: Display all todo UI (Samsuthin)
7. **Issue #5**: Add todo UI (Poomathi)
8. **Issue #7**: Update todo UI (Kokila)
9. **Issue #9**: Delete todo UI (Poomathi)

## Project Board Workflow

### Column Structure (After Setup):
- **📋 Todo**: New tasks ready to be worked on
- **🔄 In Progress**: Tasks currently being worked on
- **✅ Done**: Completed tasks

### Workflow Process:
1. **Start Work**: Move item from "Todo" to "In Progress"
2. **Complete Work**: Move item from "In Progress" to "Done"
3. **Track Progress**: Use the board for daily standups

## Team Member Responsibilities

### Kokila-Kaavian (Admin):
- Move assigned tasks to "In Progress" when starting work
- Update task status as work progresses
- Move to "Done" when tasks are completed

### Samsuthin-Kaavian (Write):
- Move assigned tasks to "In Progress" when starting work
- Update task status as work progresses
- Move to "Done" when tasks are completed

### Poomathi-Kaavian (Owner):
- Move assigned tasks to "In Progress" when starting work
- Update task status as work progresses
- Move to "Done" when tasks are completed

## Benefits of Proper Column Management

1. **Clear Status**: Everyone knows what's ready to work on
2. **Progress Tracking**: Visual representation of project progress
3. **Team Coordination**: Prevents duplicate work
4. **Workflow Efficiency**: Streamlined development process
5. **Project Visibility**: Stakeholders can see progress at a glance

## Troubleshooting

### If Items Don't Move:
- Refresh the project board page
- Ensure you have proper permissions
- Try using the edit item method instead of drag-and-drop

### If "No Status" Column Won't Hide:
- Ensure all items are moved to other columns first
- Check if you have admin permissions on the project
- Try refreshing the page and attempting again

### If Status Field Doesn't Update:
- Click on the item to open the detail view
- Manually select the status from the dropdown
- Save the changes

## Next Steps After Setup

1. **Team members** can start working on their assigned tasks
2. **Move tasks** to "In Progress" when work begins
3. **Update progress** regularly in the project board
4. **Use the board** for daily standups and progress reviews
5. **Link pull requests** to project items as work is completed
