import React from 'react'
import EncryptDialog from './EncryptDialog';
import { Helmet } from "react-helmet";
import toast from 'react-hot-toast';
const initialValue1 = {
  secretkey: '',
  note: ''
}

function Encrypt() {
  const [open_en, setOpen_en] = React.useState(false);
  const [en_value, seten_value] = React.useState(initialValue1);

  const handleClickOpen_en = () => {
    setOpen_en(true);
  };

  const handleClose_en = () => {
    setOpen_en(false);
  };

  const onValueChange = (e) => {
    seten_value({ ...en_value, [e.target.name]: e.target.value })
  }

  const removeSpaces = (e) => {
    if (e.which === 32){
      toast.error('Secret Key must be white space free')
      return false;
  }
  }


  return (
    <>
      <Helmet>
        <title>cryptote - New Encryption</title>
        <meta
          name="description"
          content="Create new private anonymous encrypted secret note with cryptote"
        />
      </Helmet>

      <div className="en_de_form">
        <div className="encrypt_form">
          <p>🗝️ Encryption</p>
          <input placeholder="Secret key*" name="secretkey" type="text" onChange={(e) => onValueChange(e)} onKeyPress={(e) => removeSpaces(e)}/>
          <textarea placeholder="Secret Note*" name="note" type="text" onChange={(e) => onValueChange(e)} />
          <button onClick={handleClickOpen_en} disabled={en_value.secretkey.length === 0 || en_value.note.length === 0 || en_value.secretkey.includes(" ")}>Encrypt</button>
        </div>
      </div>
      <EncryptDialog open={open_en} handleClose={handleClose_en} secretkey={en_value.secretkey} note={en_value.note} />
    </>
  )
}

export default Encrypt