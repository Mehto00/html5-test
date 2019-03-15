import React from 'react';
import './Header.css';

const header = () => {
    return(
     <header className="mainHeader">
        <div className="mainHeaderWrapper">
            <span className="mainHeader__logo"></span>
            <span className="mainHeader__brand">Word Software</span>
        </div>
     </header>   
    )
}

export default header;