import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 w-full">
            <div className="container mx-auto space-x-8 flex justify-between">
                <Link to="/" className="text-white text-lg">Home</Link>
                <Link to="/watchlist" className="text-white text-lg">Watchlist</Link>
            </div>
        </nav>
    );
};

export default Navbar;
