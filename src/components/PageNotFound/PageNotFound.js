import React from 'react'
import { useNavigate } from 'react-router'
import "./PageNotFound.scss"

function PageNotFound() {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate("/")
  }
  return (
    <div className='page404'>
      <div className='page404__title'>
        <span>404</span>
      </div>
      <div className='page404__text'>
        <span>Page not found</span>
      </div>
      <div className='page404__button'>
        <button onClick={handleClick}><span>Return to Home</span></button>        
      </div>
    </div>
  )
}

export default PageNotFound