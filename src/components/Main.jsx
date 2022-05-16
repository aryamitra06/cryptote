import React from "react";
import "../style/global.css";
import DecryptDialog from "./DecryptDialog";
import EncryptDialog from "./EncryptDialog";

const initialValue1 = {
  secretkey: '',
  note: ''
}
const initialValue2 = {
  secretkey: '',
  code: ''
}

function Encrypt() {
  const [open_en, setOpen_en] = React.useState(false);
  const [open_de, setOpen_de] = React.useState(false);
  const [en_value, seten_value] = React.useState(initialValue1);
  const [de_value, setde_value] = React.useState(initialValue2);

  const handleClickOpen_en = () => {
    setOpen_en(true);
  };

  const handleClose_en = () => {
    setOpen_en(false);
  };

  const handleClickOpen_de = () => {
    setOpen_de(true);
  };

  const handleClose_de = () => {
    setOpen_de(false);
  };

  const onValueChange = (e) => {
    seten_value({ ...en_value, [e.target.name]: e.target.value })
    setde_value({...de_value, [e.target.name]: e.target.value})
  }
  
  return (
    <>
      <div className="main_container">
        <div className="hero_section">
          <h1>The Private <span>Anonymous Encrypted</span><br></br>Secret Note</h1>
          <h2>Open-source and free to use!<br></br>It uses <span>AES-256 algorithm</span> to encrypt.</h2>
        </div>
        <div className="en_de_form">
          <div className="encrypt_form">
            <p>🗝️ Encryption</p>
            <input placeholder="Secret key*" name="secretkey" type="text" onChange={(e) => onValueChange(e)} />
            <textarea placeholder="Secret Note*" name="note" type="text" onChange={(e) => onValueChange(e)} />
            <button onClick={handleClickOpen_en} disabled={en_value.secretkey.length===0 || en_value.note.length===0}>Encrypt</button>
          </div>
          <div className="decrypt_form">
            <p>🔐 Decryption</p>
            <input placeholder="Secret key*" name="secretkey" type="text" onChange={(e) => onValueChange(e)} />
            <input placeholder="Code*" name="code" type="text" onChange={(e) => onValueChange(e)} />
            <button onClick={handleClickOpen_de} disabled={de_value.secretkey.length===0 || de_value.code.length===0}>Decrypt</button>
          </div>
        </div>
      </div>
      <EncryptDialog open={open_en} handleClose={handleClose_en} secretkey={en_value.secretkey} note={en_value.note} />
      <DecryptDialog open={open_de} handleClose={handleClose_de} secretkey={de_value.secretkey} code={de_value.code}/>
    </>
  );
}

export default Encrypt;
