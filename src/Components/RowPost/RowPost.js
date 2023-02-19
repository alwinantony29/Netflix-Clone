import axios from '../../axios'
import { imageUrl } from '../../constants/constants'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './RowPost.css'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  
    
  }, [])
  
  return (
    <div className='row'>
        <h2>{props.title} </h2>
        <div className="posters">
          {movies.map((obj)=>
            <img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt={movies?obj.title:""} />
          
          )}
        </div>
    </div>
  )
}

export default RowPost