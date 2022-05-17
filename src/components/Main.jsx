import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Encrypt() {

  return (
    <>
          <Helmet>
        <title>cryptote - The Private Anonymous Encrypted Secret Note</title>
        <meta
          name="description"
          content="cryptote - The Private Anonymous Encrypted Secret Note. Open-source and free to use! It uses AES-256 algorithm to encrypt."
        />
      </Helmet>
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
    </>
  );
}

export default Encrypt;
