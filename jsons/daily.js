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
      "timestamp": 1733054400000, // Start time
      "finishTimestamp": 1733056200000 , // One hour after start
      "recurrence": {
        "type": "monthly",
        "onDay": [27]
      },
      "importance": "high",
      "bg": "#22d3ee",
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
          "isDone": true
        }
      ]
    },
    {
      "id": "task2",
      "type": "task",
      "title": "Grocery Shopping",
      "description": "Weekly grocery run for household supplies",
      "timestamp": 1733058000000 , // Start time
      "finishTimestamp": 1733059800000, // One hour after start
      "recurrence": {
        "type": "weekly",
        "onDay": ["Monday"]
      },
      "importance": "medium",
      "bg": "#f9a8d4",
      "logo": "grocery_shopping_logo.png",
      "isDone": false,
      "subtasks": [
        {
          "id": "subtask1",
          "title": "Make a list",
          "isDone": true
        },
        {
          "id": "subtask2",
          "title": "Check pantry",
          "isDone": false
        },
        {
          "id": "subtask3",
          "title": "Check fridge",
          "isDone": false
        }
      ]
    },
    {
      "id": "task3",
      "type": "habit",
      "title": "Morning Jog",
      "description": "Daily morning jog around the park",
      "timestamp": 1733061600000 , // Start time
      "finishTimestamp": 1733063400000 , // One hour after start
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