# To-Do List App

This is a simple To-Do List application built with React, Tailwind CSS, and Framer Motion. The app allows users to add, complete, and delete tasks, with smooth animations and a clean, responsive UI.

## Features

- **Add Tasks:** Easily add new tasks to your to-do list.
- **Complete Tasks:** Click on a task to mark it as completed.
- **Delete Tasks:** Remove tasks from the list using a bin icon.
- **Smooth Animations:** The app uses Framer Motion for smooth UI animations.
- **Responsive Design:** Tailwind CSS ensures the app looks great on all devices.

## Tech Stack

- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Framer Motion:** A library for animations and transitions in React.
- **Context API:** Used for managing the global state of the to-do list.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   
2. **Install the dependencies:**
   ```bash
   cd todo-list-app
   npm install
   
4. **Run the app:**
   ```bash
   npm run dev

Go to http://localhost:3000 to view the app.

## Project Structure
```bash
src/
│
├── components/
│   ├── TodoInput.jsx   // Component for adding new tasks
│   ├── TodoItem.jsx    // Component for displaying individual tasks
│   └── TodoList.jsx    // Component for displaying the list of tasks
│
├── context/
│   └── TodoContext.jsx // Context API for managing the state
│
├── App.jsx             // Main application component
└── index.js            // Entry point for the React app


