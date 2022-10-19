import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material';

import "./MovieDetail.scss"
import {fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow} from "../../features/movies/movieSlice"
import imdb from "../../images/imdb.png";
import tomatoFresh from "../../images/tomato-fresh.svg";
import tomatoSplat from "../../images/tomato-splat.svg";
import tomatoGray from "../../images/tomato-gray.svg";
import metacritic from "../../images/metacritic.svg";
import noPoster from "../../images/no-poster.png"

export default function MovieDetail() {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const detail = useSelector(getSelectedMovieOrShow)
  const navigate = useNavigate()
  if (detail.Response === "False")  navigate("/PageNotFound")
  const isRatingPresent = (arr, title) => {
    return arr.find(source => source.Source === title)
  }
  const filterRating = (arr, name) =>{
      return arr.filter(({ Source }) => Source === name).map(({ Value }) => Value);
  }
  const getRottenTomatoesBadge = (arr) =>{
    let val = arr.filter(({ Source }) => Source === "Rotten Tomatoes").map(({ Value }) => Value);
    val = +(val.join("").substring(0, 2))
    if (val >= 60)
      return <img src={tomatoFresh} alt="rotten"/>
    if (val < 60 && !(val === 0))
      return <img src={tomatoSplat} alt="rotten"/>
    if (val === "" || val === undefined || val === null || val === 0)
      return <img src={tomatoGray} alt="rotten"/>
  }
  const getRatings = (ratings) => {
    let ratingsElements = []
    ratingsElements.push(<span key="imdb">{isRatingPresent(ratings, "Internet Movie Database") ? filterRating(ratings, "Internet Movie Database") :"N/A"} <img src={imdb} alt="imdb"/></span>)
    ratingsElements.push(<span key="tomtaoes">{isRatingPresent(ratings, "Rotten Tomatoes") ? filterRating(ratings, "Rotten Tomatoes") : "N/A"}{getRottenTomatoesBadge(ratings)}</span>)
    ratingsElements.push(<span key="metacritic">{isRatingPresent(ratings, "Metacritic") ? filterRating(ratings, "Metacritic") : "N/A"}<img src={metacritic} alt="metacritic"/></span>)
    return ratingsElements
  }

  let ratings = ""
  ratings = detail.Response === "True" ? (getRatings(detail.Ratings)) : (<span>No rating available</span>);
  useEffect(()=>{
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    
    return () =>{
      dispatch(removeSelectedMovieOrShow())
    }
  },[dispatch, imdbID])
  return (
    <div className='detail'>
      {Object.keys(detail).length === 0 ? (<CircularProgress />) : (
        <>
          <div className='detail__left'>
            <div className='detail__left__title'>
              {detail.Title}
            </div>
            <div className='detail__left__ratings'>
              {ratings}
              <span key="runtime">Runtime: {detail.Runtime ? detail.Runtime : "N/A"}</span>
              <span key="rated">Rated: {detail.Rated ? detail.Rated : "N/A"}</span>
              <span key="year">Year: {detail.Year ? detail.Year : "N/A"}</span>
            </div>
            <div className='detail__left__plot'>
              <span key="plot">
                {detail.Plot ? detail.Plot : "N/A"}
              </span>
            </div>
            <div className='detail__left__info'>
              <div>
                <span key="director-1">Director</span>
                <span key="director-2">{detail.Director ? detail.Director : "N/A"}</span>
              </div>
              <div>
                <span key="Actors-1">Actors</span>
                <span key="Actors-2">{detail.Actors ? detail.Actors : "N/A"}</span>
              </div>
              <div>
                <span key="Genre-1">Genre</span>
                <span key="Genre-2">{detail.Genre ? detail.Genre : "N/A"}</span>
              </div>
              <div>
                <span key="Awards-1">Awards</span>
                <span key="Awards-2">{detail.Awards ? detail.Awards : "N/A"}</span>
              </div>
              <div>
                <span key="BoxOffice-1">BoxOffice</span>
                <span key="BoxOffice-2">{detail.BoxOffice ? detail.BoxOffice : "N/A"}</span>
              </div>
            </div>
          </div>
          <div className='detail__right'>
            <img src={detail.Poster === "N/A" ? noPoster : detail.Poster} alt={detail.Title}/>
          </div>
        </>
      )}
    </div>
  )
}
