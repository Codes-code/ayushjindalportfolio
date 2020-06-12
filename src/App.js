import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className='ui header' style={{marginTop:'33px'}}>
          Ayush Jindal | Portfolio Coming Soon...
        </h1>

      <div>
      <h3 className="ui header">some meme for time being</h3><br/><br/>
      <img alt="edgy meme 1" src="./meme1.png"></img>
      <img alt="edgy meme 2" src="./meme2.jpg"></img>
      <img alt="edgy meme 3" src="./meme3.png"></img>
      <img alt="edgy meme 4" src="./meme4.png"></img>
      <img alt="edgy meme 5" src="./meme5.png"></img>
      </div>

      <div className="projects" style={{marginTop:'100px', marginBottom:'100px'}}>
        <h2>Have a look at my React Projects</h2>
        <div>
          <a href="https://fireauth-8c520.web.app/" target="_blank">1. Authentication Project</a>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
