import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMovies } from '../context/MovieContext';

const API_KEY = 'cfe422613b250f702980a3bbf9e90716';

const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results.slice(0, 30); // Get the first 30 movies
};

const Home = () => {
    const [movies, setMovies] = useState([]);
    const { addToWatchlist } = useMovies();

    useEffect(() => {
        fetchMovies().then((res, err) => setMovies(res));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-5 gap-4">
                {movies?.map((movie) => (
                    <motion.div 
                        key={movie.id} 
                        className="bg-white p-4 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img 
                            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                            alt={movie.title} 
                            className="rounded-lg"
                        />
                        <h2 className="text-lg text-black font-bold mt-2">{movie.title}</h2>
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
