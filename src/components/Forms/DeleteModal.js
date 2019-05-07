import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {apiURL} from '../../config';
import styled from 'styled-components';
import DeleteIcon from  '@material-ui/icons/Delete';

const Form = styled.form`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  color: grey;
  margin: 20px;
`;

// const FormButton = styled.a`
//   color: #ffffff;
//   background-color: none;
//   cursor: pointer;
//   text-transform: uppercase;
// `;



export default class DeleteModal extends React.Component {
  state = {
    open: false,
    name: this.props.photo.name,
    photo_url: this.props.photo.photo_url
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDelete = async () => {
    await fetch(`${apiURL}/photo/${this.props.photo._id}`, {
        method: 'DELETE',
    }).then(res  => console.log(res))
    .catch (err => console.log(err))
  };

  render() {
    return (
      <>
        {/* <FormButton onClick={this.handleClickOpen}> */}
         <DeleteIcon onClick={this.handleClickOpen}/>
        {/* </FormButton> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.state.name}</DialogTitle>
          <DialogContent>
          <Form onSubmit={this.handleDelete}>
              <h3>Are you sure you want to delete this photo?</h3>
              <Button type="submit" onClick={this.handleClose}>Delete</Button>
            </Form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}