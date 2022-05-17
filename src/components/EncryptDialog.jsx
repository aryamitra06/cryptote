import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import cryptoJs from "crypto-js";
import Typography from "@mui/material/Typography";
import toast from 'react-hot-toast';

function EncryptDialog(props) {
  var ciphertext = cryptoJs.AES.encrypt(
    `${props.note}`,
    `${props.secretkey}`
  ).toString();

  async function handleCopy() {
    await navigator.clipboard.writeText(`Hey👋, I've a secret note for you! 🙈😍😈\n\nhttps://cryptote.netlify.app/decrypt?secretkey=${props.secretkey}&code=${ciphertext}`).then(()=> {
      toast.success('Copied to clipboard')
    })
  }


  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Encryption Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
              <Typography variant="subtitle2">Now COPY and send it to your secret agent, Have fun! 😍😈</Typography>
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
