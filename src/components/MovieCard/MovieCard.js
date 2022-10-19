import React from 'react'
import { Link } from 'react-router-dom'
import noPoster from "../../images/no-poster.png"
import "./MovieCard.scss"

function MovieCard(props) {
  const {data} = props
  return (
    <div className='card-item'>
      <Link to={`/movie/${data.imdbID}`}>
      <div className='card-item__inner'>
        <div className='card-item__inner__top'>
          <img src={data.Poster === "N/A" ? noPoster : data.Poster} alt={data.Title}/>
        </div>
        <div className='card-item__inner__bottom'>
          <div className='card-item__inner__bottom__info'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard