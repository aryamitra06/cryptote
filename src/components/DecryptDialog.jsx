import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import cryptoJs from "crypto-js";
import Typography from "@mui/material/Typography";


function DecryptDialog(props) {
  var bytes = cryptoJs.AES.decrypt(`${props.code}`, `${props.secretkey}`);
  var originalText = (bytes.toString(cryptoJs.enc.Utf8));
  return (
    <>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Secret Note</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
              originalText.length === 0 ? (
                <>
                <Typography>Sorry, no secret note found :(</Typography>
                </>
              ) : (
                <>
                <Typography>{originalText}</Typography>
                </>
              )
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DecryptDialog