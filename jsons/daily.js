export const userEx = {
  "userId": "12345",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "tasks": [
    {
      "id": "task1",
      "type": "event",
      "title": "Team Meeting",
      "description": "Monthly team meeting",
      "timestamp": 1732870800000, // Start time
      "finishTimestamp": 1732874400000, // One hour after start
      "recurrence": {
        "type": "monthly",
        "onDay": [27]
      },
      "importance": "high",
      "bg": "#6A55E0ff",
      "logo": "team_meeting_logo.png",
      "isDone": false,
      "subtasks": [
        {
          "id": "subtask1",
          "title": "Prepare presentation",
          "isDone": false
        },
        {
          "id": "subtask2",
          "title": "Send agenda",
          "isDone": false
        }
      ]
    },
    {
      "id": "task2",
      "type": "task",
      "title": "Grocery Shopping",
      "description": "Weekly grocery run for household supplies",
      "timestamp": 1732887000000, // Start time
      "finishTimestamp": 1732887000000, // One hour after start
      "recurrence": {
        "type": "weekly",
        "onDay": ["Monday"]
      },
      "importance": "medium",
      "bg": "#47AB6Fff",
      "logo": "grocery_shopping_logo.png",
      "isDone": false,
      "subtasks": [
        {
          "id": "subtask1",
          "title": "Make a list",
          "isDone": false
        },
        {
          "id": "subtask2",
          "title": "Check pantry",
          "isDone": false
        }
      ]
    },
    {
      "id": "task3",
      "type": "habit",
      "title": "Morning Jog",
      "description": "Daily morning jog around the park",
      "timestamp": 1732898400000, // Start time
      "finishTimestamp": 1732902000000, // One hour after start
      "recurrence": {
        "type": "daily"
      },
      "importance": "high",
      "bg": "#EA6C70ff",
      "logo": "morning_jog_logo.png",
      "isDone": false,
      "subtasks": []
    }
  ]
};