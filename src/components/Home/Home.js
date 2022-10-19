import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

function Home() {
  const dispatch = useDispatch();
  const searchText = "Avatar";
  useEffect(()=>{
        dispatch(fetchAsyncMovies(searchText))
        dispatch(fetchAsyncShows(searchText))
  }, [dispatch])
  return (
    <div className='home'>
      <div className='home__banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home