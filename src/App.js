import React, {useState} from 'react';
import './App.css';
import Grid from './Components/Grid'  
import GridManual from './Components/gridManual'

import {
    // BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


function App() {
  let [mode, setMode] = useState({left: '37px', width: '106px'});
  let [info, setInfo] = useState(true);
  const changeInfo = () =>{
    setInfo(false);
  }

  // const changeMode = (value) =>{
  //   setMode(value);
  // }
  
  return (
    <>
      <div className="container">
        <h1 className="text-center" style={{ fontWeight: '900', textShadow: '5px 5px 2px #64a0a3', padding: '10px 0' }}>SUDOKU SOLVER</h1></div>
        <div className="container navbar" style={{width: '350px'}}>
          <Link to="/" className='link' onClick={()=>{setMode({left: '37px', width: '106px'})}}>Automatic</Link>
          <Link to="manual" className='link' onClick={()=>{setMode({left: '235px', width: '77px'})}}>Manual</Link>
          <span className="underline" style={mode}></span>
        </div>

        <Routes>
          <Route path='/' element={<Grid info = {info} changeInfo = {changeInfo}/>}/>
          <Route path='manual' element={<GridManual  />} />
        </Routes>
        {/* <Grid/> */}
    </>
  );
}

export default App;
