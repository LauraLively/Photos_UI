import React, { Component } from 'react';
// import { Draggable } from "react-beautiful-dnd";
import { Grid } from '@material-ui/core';
import SinglePhoto from './SinglePhoto';
import { apiURL } from '../../config';
import styled from 'styled-components';

const styles = {
  Grid: {
    display: 'flex',
    flexFlow: 'row wrap',
    flexShrink: 1,
    flexGrow: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    marginLeft: '0 2rem 0 2rem'
  },
}
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-shrink: 1;
  flex-grow: 1;
  justify-content: center;
`;


class DisplayPhotos extends Component {
  state = {
    photos:[]
  }

  getPhotos = async () => {
    await fetch(`${apiURL}/photos`)
      .then(response => response.json())
      .then(data => data.map(element => <SinglePhoto key={element._id} photo={element} refresh={this.props.refresh} />))
      .then(components => this.setState({ photo: components }))
      .catch(err => console.log(err))
  };
  componentDidMount() {
    this.getPhotos()
  };

  render() {
    return (
      <>
        <Container >
          <Grid style={styles.Grid} container spacing={24}>
              {this.state.photo}
          </Grid>
        </Container>
      </>
    );
  }
};

export default DisplayPhotos;
