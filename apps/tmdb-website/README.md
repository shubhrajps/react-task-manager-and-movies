# Movie App

A movie browsing application similar to IMDb, built with React, Tailwind CSS, Framer Motion, and the TMDB API. This standalone application allows users to view popular movies, add them to a watchlist, and search through their saved movies.

## Features

- **Home Page:** Displays a grid of 30 popular movies fetched from the TMDB API. Each movie is displayed with its thumbnail, title, and an "Add to Watchlist" button.
- **Watchlist Page:** Users can view and manage their saved movies. The watchlist includes a search feature and allows users to remove movies from the list.
- **Responsive UI:** The application is styled using Tailwind CSS, ensuring a responsive and visually appealing design.
- **Animations:** Framer Motion is used to add smooth animations to the UI elements.

## Technologies Used

- **React:** For building the user interface and managing component state.
- **React Context API:** For managing global state (watchlist) across components.
- **Tailwind CSS:** For styling the application with utility-first CSS.
- **Framer Motion:** For adding animations to the UI.
- **TMDB API:** For fetching movie data.
- **LocalStorage:** For persisting the watchlist data between sessions.

## Screenshots
![Screenshot 2024-08-24 at 5 24 44 PM](https://github.com/user-attachments/assets/8fe12856-d4aa-4c77-9048-6d241e692086)

![Screenshot 2024-08-24 at 5 25 06 PM](https://github.com/user-attachments/assets/ff08b1ad-b259-4a02-90b3-32aaaca43888)

## Video
https://github.com/user-attachments/assets/8ceb1dd6-549c-4c33-8c7b-16b960df1bf4



## Getting Started

Follow the steps below to run this project locally.

### Prerequisites

- Node.js and npm installed on your machine.
- A TMDB API key. Sign up for a free account at [The Movie Database (TMDB)](https://www.themoviedb.org/) to get your API key.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app

2. **Install the dependencies:**
   ```bash
   npm install
   
4. **Run the app:**
   ```bash
   npm run dev
   Go to http://localhost:3000 to view the app.

# Project Structure

- `src/context/MovieContext.js`: Context and reducer logic for managing the watchlist.
- `src/components/Navbar.jsx`: Navigation bar with links to Home and Watchlist pages.
- `src/components/Home.jsx`: Displays popular movies from the TMDB API.
- `src/components/Watchlist.jsx`: Displays user's watchlist, allows searching and removing movies.
- `src/App.js`: Main application component, handles routing.

## Usage

- Home Page: Browse popular movies, add them to your watchlist.
- Watchlist Page: View saved movies, search, and remove as needed.
