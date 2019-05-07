import React, { Component } from 'react';
import { TextField, Grid, Card, CardContent, Button }from '@material-ui/core';
import styled from 'styled-components';
import {apiURL} from '../../config';
import { Link } from 'react-router-dom'

const Form = styled.form`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  color: grey;
  margin: 20px;
  width: 50vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
`;


class AddPhoto extends Component {
  state = {
    name: "",
    photo_url: ""
  };

  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
  })
  }
  handleCancel = (event) => {

  }
  handleSubmit = async (event) => {
    event.preventDefault();
    let data = this.state; 
    await fetch(`${apiURL}/photo`, {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          photo_url: this.state.photo_url
        }),
        headers: { //to fix POST body to API. Deleted 's' on end of applications The problem with copy/paste from stackoverflow!  
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res.json()))
        .then(() => this.setState({
            name: "",
            photo_url:""
        }))
        .then(this.props.history.push("/"))
        .catch(err => console.log(err));
    console.log(data)
};

  render() {
    console.log("state", this.state)
    return (
      <div>
        <Container>
        <Grid>
          <Card>
            <CardContent>
            <Form onSubmit={this.handleSubmit}>
              <h3>Add a Photo</h3>
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
                label="Photo Url"
                name = "photo_url"
                value={this.state.photo_url}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                required
              />
              <Button type="submit">Submit</Button>
              <Button component={Link} to="/" >Cancel</Button>
            </Form>
            </CardContent>
          </Card>
        </Grid>
        </Container>
      </div>
    );
  }
};

export default AddPhoto;
