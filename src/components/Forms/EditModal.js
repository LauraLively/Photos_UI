import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {apiURL} from '../../config';
import styled from 'styled-components';
import EditIcon from  '@material-ui/icons/Edit';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import Grid from '@material-ui/core/Grid';



const Form = styled.form`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  color: grey;
  margin: 20px;
`;



export default class EditModal extends React.Component {
  state = {
    open: false,
    name: this.props.photo.name,
    photo_url: this.props.photo.photo_url,
    dateTaken: this.props.photo.dateTaken,
    desc: this.props.photo.desc
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // handleToggle = () => {
  //   this.setState({ open: !open });
  // };

  handleChange = (event) => {
    // React synthetic events
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDateChange = async (date) => {
    this.setState({ dateTaken: date });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let data = this.state; 
    await fetch(`${apiURL}/photo/${this.props.photo._id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: this.state.name,
          photo_url: this.state.photo_url,
          desc: this.state.desc,
          dateTaken: this.state.dateTaken
        }),
        headers: { //to fix POST body to API. Deleted 's' on end of applications The problem with copy/paste from stackoverflow!  
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
        .then(() => this.setState({
            name: "",
            photo_url:""
        }))
        .then(() => this.props.closeUpdate())
        .then(() => window.location.reload())
        .catch(err => console.log(err));
    console.log(data)
};

  render() {
    return (
      <>
        {/* <FormButton onClick={this.handleClickOpen}> */}
         <EditIcon  onClick={this.handleClickOpen}/>
        {/* </FormButton> */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.photo.name}</DialogTitle>
          <DialogContent>
          <Form onSubmit={this.handleSubmit}>
              <TextField
                id="outlined-name"
                autoFocus
                name ="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                id="outlined-name"
                name ="desc"
                label="Description"
                value={this.state.desc}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                id="outlined-name"
                label="Photo Url"
                name = "photo_url"
                value={this.state.photo_url}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container 
                // className={classes.grid} 
                justify="space-around">
                <DatePicker
                    margin="normal"
                    label="Date Taken"
                    value={this.state.dateTaken}
                    onChange={this.handleDateChange}
                    disablePast= {false}
                />
                </Grid>
              </MuiPickersUtilsProvider>
              <Button type="submit" onClick={this.handleClose} refresh={this.props.refresh}>Submit</Button>
              <Button onClick={this.handleClose} >Cancel</Button>
            </Form>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}