import React from 'react';
import './style.css';
import InfoSection from './InfoSection';
import About from './About';

import Footer from './Footer';
import Image from './image';

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <Image />
        <InfoSection />
        <About />
        <Footer />
      </div>

    </div>
  );
}

export default App;
