import React from 'react';
import Name from './components/Name.jsx';
import {Menu, MenuItem} from './components/Menu.jsx';

const App = () => {
  return (
    <div className='app'>
      <Name />
      <Menu>
        <MenuItem name="Home" link="/" />
        <MenuItem name="About" link="/about" />
        <MenuItem name="Projects" link="/projects" />
        <MenuItem name="Contact" link="/contact" />
      </Menu>
    </div>
  )
}

export default App;
