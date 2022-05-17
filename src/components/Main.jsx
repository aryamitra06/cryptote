import React from "react";
import { Link } from "react-router-dom";


function Encrypt() {

  return (
    <>
      <div className="main_container">
        <div className="hero_section">
          <h1>The Private <span>Anonymous Encrypted</span><br></br>Secret Note</h1>
          <h2>Open-source and free to use!<br></br>It uses <span>AES-256 algorithm</span> to encrypt.</h2>
          <div className="btns">
            <Link to='/encrypt'><button>Encrypt</button></Link>
            <Link to='/decrypt'><button>Decrypt</button></Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&copy;{new Date().getFullYear()} cryptote v2.0.0</p>
      </div>
    </>
  );
}

export default Encrypt;
