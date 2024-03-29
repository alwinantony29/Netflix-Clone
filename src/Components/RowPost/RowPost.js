import axios from '../../axios'
import YouTube from 'react-youtube'
import { imageUrl,API_KEY } from '../../constants/constants'
import React, { useState } from 'react'
import { useEffect } from 'react'
import './RowPost.css'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, seturlId] = useState()
  useEffect(() => {
    // console.log(props.url);
    axios.get(props.url).then((response)=>{
      // console.log(response.data)
      setMovies(response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%' ,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
      // console.log(id);
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        // console.log(response.data);
        if(response.data.results.length!==0){
          seturlId(response.data.results[0].key)

        }else{console.log('empty array');}
      })
  }
  
  return (
    <div className='row'>
        <h2>{props.title} </h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt={movies?obj.title:""} />
          
          )}
        </div>
       {urlId && <YouTube videoId={urlId} opts={opts}/>}
    </div>
  )
}

export default RowPost