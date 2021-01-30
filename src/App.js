import React from 'react';
import { useMediaQuery } from 'react-responsive';

import './App.css';
import FullPage from './components/FullPage';
import Mobile from './components/Mobile';


const App = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)'
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 500px'
  })
  return (
    <div className="App">
      {/* <FullPage /> */}
      {isMobile ? <Mobile /> : <FullPage />}
    </div>
  );
}

export default App;
