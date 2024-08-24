import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMovies } from '../context/MovieContext';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const { addToWatchlist } = useMovies();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`);
            const data = await response.json();
            setMovies(data.results.slice(0, 30)); // Get the first 30 movies
        };
        fetchMovies();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-3 gap-4">
                {movies.map((movie) => (
                    <motion.div 
                        key={movie.id} 
                        className="bg-white p-4 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={movie.title} 
                            className="rounded-lg"
                        />
                        <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
                        <button 
                            className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
                            onClick={() => addToWatchlist(movie)}
                        >
                            Add to Watchlist
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Home;
