import React from 'react';
import './App.css';
import Grid from './Components/Grid'
import cross from './cross.png'

function App() {
  return (
    <>
    <div className="container">
    <h1 className="text-center" style={{fontWeight: '900', textShadow: '5px 5px 2px #64a0a3', padding: '10px 0'}}>SUDOKU SOLVER</h1></div>
    <Grid />
    <div className="info" id='info'>
      <h3>How To Solve?</h3>
      <img src={cross} alt="error" className="close" onClick={()=>{ document.getElementById('info').style.display = 'none'}}/>
      <p>1.Enter all the numbers of the questions in their corresponding boxes.</p>
      <p>2.Click on <kbd>Lock</kbd> to lock the numbers.</p>
      <p>3.Click on <kbd>Next</kbd> until all the boxes are filled with answers.</p>
    </div>
    </>
  );
}

export default App;
