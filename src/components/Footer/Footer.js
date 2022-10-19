import React from 'react'

import ButtonMailTo from "../ButtonMailTo/ButtonMailTo"
import "./Footer.scss";

function Footer() {
  return (
    <div className='footer'>
      <div> Api by <ButtonMailTo label="Brian Fritz" mailto="mailto:bfritz@fadingsignal.com" /></div>
      <div>This site is not endorsed by or affiliated with <a href='https://www.imdb.com'>IMDb.com</a></div>
    </div>
  )
}

export default Footer