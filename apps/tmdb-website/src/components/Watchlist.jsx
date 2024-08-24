import React, { useState } from 'react';
import { useMovies } from '../context/MovieContext';

const Watchlist = () => {
    const { watchlist, removeFromWatchlist } = useMovies();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMovies = watchlist.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <input 
                type="text" 
                placeholder="Search Watchlist..." 
                className="w-full p-2 mb-4 border rounded" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="grid grid-cols-5 gap-4">
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img 
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                            alt={movie.title} 
                            className="rounded-lg"
                        />
                        <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
                        <button 
                            className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
                            onClick={() => removeFromWatchlist(movie.id)}
                        >
                            Remove from Watchlist
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Watchlist;