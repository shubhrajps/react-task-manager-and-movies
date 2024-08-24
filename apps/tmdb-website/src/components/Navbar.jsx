import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto space-x-8 flex justify-between">
                <h1 className="text-white text-2xl font-bold">TMDB Movies</h1>
                <div className='flex space-x-8'>
                    <Link to="/" className="text-white text-lg">Home</Link>
                    <Link to="/watchlist" className="text-white text-lg">Watchlist</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
