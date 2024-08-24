import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Watchlist from './components/Watchlist';
import { MovieProvider } from './context/MovieContext';

function App() {
    return (
        <MovieProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/watchlist" element={<Watchlist />} />
                </Routes>
            </Router>
        </MovieProvider>
    );
}

export default App;
