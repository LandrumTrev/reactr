// Navbar component renders top navigation (game info) bar
// Imported into and rendered by Master component

import React from 'react';
import './style.css';

function Jumbo(props) {
  return (
    <header className='jumbotron'>
      <h1 className='display-4'>Reactr</h1>
      <p className='lead'>
        Test your memory. Click on each element only once.
      </p>
    </header>
  );
}

export default Jumbo;
