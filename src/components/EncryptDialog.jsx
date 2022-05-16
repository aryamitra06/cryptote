import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import cryptoJs from "crypto-js";
import Typography from "@mui/material/Typography";

function EncryptDialog(props) {
  var ciphertext = cryptoJs.AES.encrypt(
    `${props.note}`,
    `${props.secretkey}`
  ).toString();

  async function handleCopy() {
    await navigator.clipboard.writeText(`Secret Key is: ${props.secretkey}\nCode is: ${ciphertext}`).then(()=> {
      alert("Copied to clipboard");
    })
  }


  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Encryption Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
              <Typography id="secretkey">Secret Key: <Typography style={{color: 'red'}}>{props.secretkey}</Typography></Typography>
              <Typography>Code: <Typography style={{color: 'red'}}>{ciphertext}</Typography></Typography>
              <br></br>
              <Typography variant="subtitle2">Now copy this and send this to your secret agent, Have fun! 😍😈</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
          <Button onClick={()=> {props.handleClose(); handleCopy();}}>Copy</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EncryptDialog;
