import React from 'react';
import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar';

function index() {
  return (
    <div>
      <div className='w-100'>
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default index;
