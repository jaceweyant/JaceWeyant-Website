import React from 'react';
import Name from '../components/Name.jsx';
import {Menu, MenuItem} from '../components/Menu.jsx';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Name />
      <Menu />
    </div>
  )
}

export default Homepage;
