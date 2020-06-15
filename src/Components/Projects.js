import React from 'react';

export default function Projects(props){
    return (
    
    <div className="projects mb-4 text-lg leading-relaxed text-gray-800" style={{marginTop:'100px', marginBottom:'100px'}}>
        <h3 className="ui header"><div className="text-gray-800">Have a look at my React.JS Projects</div></h3>
        <div>
            <b>1. </b>
            <i className="camera icon"></i>
            <a className="text-xl font-normal text-pink-500" href="https://finderscopeproject.web.app/" target="_blank">FinderScope </a>
            <a href="https://finderscopeproject.web.app/" target="_blank">| Image Search</a>
        </div>
        <div>
            <b>2. </b>
            <i className="lock alternate icon"></i>
            <a className="text-xl font-normal text-pink-500" href="https://fireauth-8c520.web.app/" target="_blank">FireAuth </a>
            <a href="https://fireauth-8c520.web.app/" target="_blank">| Authentication Project</a>
        </div>
    </div>

    );
}
