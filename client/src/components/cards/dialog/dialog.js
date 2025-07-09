import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import "./dialog.css";

export default function FormDialog(props) {

  const reloadPage = () => {
    window.location.reload();
  };

  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cpf: props.cpf,
    birth: props.birth,
    registerDate: props.registerDate,
  });

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  const handleEditPessoa = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      cpf: editValues.cpf,
      birth: editValues.birth,
      registerDate: editValues.registerDate
    });
    handleClose();
    reloadPage();
  };

  const handleDeletePessoa = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
    reloadPage();
  };

  return (
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="IDPessoa"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            defaultValue={props.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cpf"
            label="CPF"
            defaultValue={props.cpf}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            
            autoFocus
            margin="dense"
            id="birth"
            defaultValue={props.birth}
            type="date"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            
            autoFocus
            margin="dense"
            id="registerDate"
            defaultValue={new Date(props.registerDate).toLocaleDateString()}
            type="date"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button id="refresh" color="primary" onClick={() => handleDeletePessoa()}>
            Excluir
          </Button>
          <Button id="refresh" className="save--button" color="primary" onClick={() => handleEditPessoa()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
  );
}