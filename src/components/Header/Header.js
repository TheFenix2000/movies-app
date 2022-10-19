import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link, useLocation, useNavigate} from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

// import user from "../../images/user.png"
import "./Header.scss"

function Header() {
  const [searchOption,setSearchOption] = useState("")
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchOption === "") return alert("Please provide Movie or Show title")
    if (location.pathname !== "/") await navigate("/")
    dispatch(fetchAsyncMovies(searchOption))
    dispatch(fetchAsyncShows(searchOption))
    setSearchOption("")
  }
  return (
    <div className='header'>
      <Link to="/">
        <div className='header__logo'>Movie App</div>
      </Link>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchOption} placeholder="Search Movies or Shows" onChange={(e)=>setSearchOption(e.target.value)}/>
          <button type='submit'><i className="fa-solid fa-search"></i></button>
        </form>
      </div>
      {/* <div className='header__user-image'>
        <img src={user} alt="user" />
      </div> */}
    </div>
  )
}

export default Header