import React from 'react';
import './App.css';
import Grid from './Components/Grid'
import GridManual from './Components/gridManual'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  Link
} from 'react-router-dom';

function App() {
  // let [mode, setMode] = useState({left: '0px', width: '80px'});
  
  return (
    <>
      <div className="container">
        <h1 className="text-center" style={{ fontWeight: '900', textShadow: '5px 5px 2px #64a0a3', padding: '10px 0' }}>SUDOKU SOLVER</h1></div>
      <Router>
        <div className="container navbar" style={{width: '180px'}}>
          <Link to="/" className='link' id= 'link1' >Automatic</Link>
          <Link to="/manual" className='link' id= 'link2' >Manual</Link>
          <span className="underline" style={{left: '0px', width: '80px'}}></span>
        </div>
        <Routes>
          <Route path='/' element={<Grid />} />
          <Route path='manual' element={<GridManual />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
