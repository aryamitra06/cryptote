import React from "react";
import "../style/global.css";
function Appbar() {
  return (
    <>
      <div className="app_bar">
        <div className="app_brand">cryptote</div>
        <div className="app_bar_button">
          <a href="https://www.github.com" target="_blank" rel="noreferrer"><button>
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
