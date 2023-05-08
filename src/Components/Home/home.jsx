import React from 'react'
import NavBar from '../Navbar/NavBar'
import Banner from '../Banner/Banner'
import RowPost from '../RowPost/RowPost'
import { action, animation } from '../../urls'
import '../../App.css'
export default function home() {
  return (
    <div className='App'>
     <NavBar/>
      <Banner/>
      <RowPost url={animation} title='Animation' />
      <RowPost url={action} title='Action' isSmall/>
    </div>
  )
}


