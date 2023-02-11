import React from 'react'

function Banner () {
  return (
    <div className='banner'>
        <div className='content'>
            <h1>Movie Name</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>sample description</h1>
        </div>
    </div>
  )
}

export default Banner 