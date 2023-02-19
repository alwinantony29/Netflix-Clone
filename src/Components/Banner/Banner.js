import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'

import './Banner.css' 
function Banner () {
  const [movie, setMovie] = useState([])
  useEffect(()=>{
    axios.get(`/trending/all/day?api_key=${API_KEY}`).then((response)=>{
      setMovie(response.data.results[1])
    })
    
  },[])
  return (
   
    <div className='banner'  style={{ backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})` }}>
        <div className='content'>
            <h1 className='title'>{movie?movie.title : ""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner 