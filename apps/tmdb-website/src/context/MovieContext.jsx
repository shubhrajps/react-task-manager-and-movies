import React, { createContext, useContext, useReducer, useEffect } from 'react';

const MovieContext = createContext();

const initialState = {
    watchlist: JSON.parse(localStorage.getItem('watchlist')) || [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WATCHLIST':
            const updatedWatchlist = [...state.watchlist, action.payload];
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
            return { ...state, watchlist: updatedWatchlist };
        case 'REMOVE_FROM_WATCHLIST':
            const filteredWatchlist = state.watchlist.filter(
                (movie) => movie.id !== action.payload
            );
            localStorage.setItem('watchlist', JSON.stringify(filteredWatchlist));
            return { ...state, watchlist: filteredWatchlist };
        default:
            return state;
    }
};

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToWatchlist = (movie) => {
        dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie });
    };

    const removeFromWatchlist = (id) => {
        dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: id });
    };

    return (
        <MovieContext.Provider value={{ ...state, addToWatchlist, removeFromWatchlist }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovies = () => useContext(MovieContext);
