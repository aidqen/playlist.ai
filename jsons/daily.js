export const userEx = {
  "userId": "12345",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "instances": [
    {
      "id": "instance1",
      "type": "event",
      "title": "Team Meeting",
      "description": "Monthly team meeting",
      "timestamp": 1732809600000, // Start time
      "finishTimestamp": 1732813200000, // One hour after start
      "recurrence": {
        "type": "monthly",
        "onDay": [27]
      },
      "importance": "high",
      "bg": "#FF5733",
      "logo": "team_meeting_logo.png"
    },
    {
      "id": "instance2",
      "type": "task",
      "title": "Grocery Shopping",
      "description": "Weekly grocery run for household supplies",
      "timestamp": 1732809600000 , // Start time
      "finishTimestamp": 1732813200000 , // One hour after start
      "recurrence": {
        "type": "weekly",
        "onDay": ["Monday"]
      },
      "importance": "medium",
      "bg": "#33FF57",
      "logo": "grocery_shopping_logo.png"
    },
    {
      "id": "instance3",
      "type": "habit",
      "title": "Morning Jog",
      "description": "Daily morning jog around the park",
      "timestamp": 1732745606358, // Start time
      "finishTimestamp": 1732749206358, // One hour after start
      "recurrence": {
        "type": "daily"
      },
      "importance": "high",
      "bg": "#3357FF",
      "logo": "morning_jog_logo.png"
    }
  ]
};
