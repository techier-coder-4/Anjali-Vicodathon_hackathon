import { ChallengeData } from '../types';

export const STUDENT_INFO = {
  name: "Aditi Sharma",
  track: "Full Stack Development",
  rank: 42,
  totalParticipants: 500
};

export const MOCK_CHALLENGES: ChallengeData[] = [
  {
    dayId: 1,
    title: "Environment Setup & 'Hello World' API",
    description: "Welcome to Day 1! Today, you'll set up your local development environment and build a simple REST API that returns a 'Hello World' JSON response.",
    requirements: [
      "Install Node.js and preferred IDE",
      "Initialize project and install Express (or preferred framework)",
      "Create an endpoint '/' that returns { \"message\": \"Hello World\" }",
      "Push code to a public GitHub repository"
    ]
  },
  {
    dayId: 2,
    title: "Basic Authentication Layer",
    description: "Security is vital. Add a fundamental authentication middleware to yesterday's API using a dummy token check.",
    requirements: [
      "Create a middleware that checks for an 'Authorization' header",
      "Reject requests without 'Bearer secret-token' with 401 status",
      "Protect your '/' endpoint using this middleware",
      "Commit and push changes to GitHub"
    ]
  },
  {
    dayId: 3,
    title: "Database Integration",
    description: "Time to store data persistently. Connect your application to a database and create a simple schema.",
    requirements: [
      "Set up a local or cloud database (MongoDB/PostgreSQL)",
      "Create a 'User' model/schema",
      "Write a script to seed the database with one dummy user",
      "Reflect connection status in your API response"
    ]
  }
];

// Generate placeholders for the remaining 57 days
for (let i = 4; i <= 60; i++) {
  MOCK_CHALLENGES.push({
    dayId: i,
    title: `Future Challenge: Day ${i}`,
    description: `Details for challenge ${i} will be revealed soon. Keep up the momentum!`,
    requirements: [
      "Stay strictly disciplined",
      "Review past concepts",
      "Prepare for the next module"
    ]
  });
}
