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
        default:
            return state;
    }
};

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToWatchlist = (movie) => {
        dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie });
    };

    return (
        <MovieContext.Provider value={{ ...state, addToWatchlist }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovies = () => useContext(MovieContext);
