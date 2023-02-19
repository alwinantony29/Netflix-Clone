import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import './App.css'
import {action, animation} from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={animation} title='Animation' />
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
