import React from "react";
import {Link} from "react-router-dom";
function Appbar() {
  return (
    <>
      <div className="app_bar">
        <Link style={{textDecoration: 'none'}} to='/'><div className="app_brand">cryptote</div></Link>
        <div className="app_bar_button">
          <a href="https://github.com/aryamitra06/cryptote" target="_blank" rel="noreferrer"><button>
            <span></span>
            <span></span>
            <span></span>
            <span></span><i className="fab fa-github"></i>
          </button></a>
        </div>
      </div>
    </>
  );
}

export default Appbar;
