import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className='ui header' style={{marginTop:'33px'}}>
          Ayush Jindal | Portfolio Coming Soon...
        </h1>

        <div className="projects" style={{marginTop:'100px', marginBottom:'100px'}}>
          <h2>Have a look at my React.JS Projects</h2>
          <div>
            <b>1. </b>
            <i className="lock alternate icon"></i>
            <a href="https://fireauth-8c520.web.app/" target="_blank">FireAuth | Authentication Project</a>
          </div>
          <div>
            <b>2. </b>
            <i className="camera icon"></i>
            <a href="https://finderscopeproject.web.app/" target="_blank">FinderScope | Image Search</a>
          </div>
        </div>

        <div class="ui divider"></div>

        <div>
          <h3 className="ui header">enjoy some memes for time being</h3><br/><br/>
          <img alt="edgy meme 1" src="./meme1.png"></img>
          <img alt="edgy meme 2" src="./meme2.jpg"></img>
          <img alt="edgy meme 3" src="./meme3.png"></img>
          <img alt="edgy meme 4" src="./meme4.png"></img>
          <img alt="edgy meme 5" src="./meme5.png"></img>
        </div>

      </div>
    </div>
  );
}

export default App;
