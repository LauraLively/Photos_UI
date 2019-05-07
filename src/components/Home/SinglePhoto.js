import React, { Component } from 'react';
import { Grid, Card, CardContent, CardActionArea, Button } from '@material-ui/core';
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseIcon from '@material-ui/icons/Close';

import EditModal from '../Forms/EditModal';
import DeleteModal from '../Forms/DeleteModal';

const Imagesize = styled.img`
  width: 20vw;
`;

const ModalImg = styled.img`
  max-width: 100vw;
  max-height: 75vh;
`;

const Container = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: wrap;

`;

const UpdateButtons = styled.div`
  display: flex-grow;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
`;

const MoreButton = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  position: relative;
  
`;
const DialogTop = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
`;


export class SinglePhoto extends Component {
  state = {
    open: false,
    isUpdating: false,
    maxWidth: 'xl',

  };

  toggleUpdate = () => {
    this.setState({ isUpdating: !this.state.isUpdating })
  };

  moreButton = () => (
    <MoreButton>
      <Button onClick={this.toggleUpdate}><MoreHorizIcon /></Button>
    </MoreButton>

  );

  editDelete = () => (
    <UpdateButtons>
      <Button><EditModal photo={this.props.photo} refresh={this.props.refresh} closeUpdate={this.toggleUpdate} /></Button>
      <Button ><DeleteModal photo={this.props.photo} /></Button>
      <Button onClick={this.toggleUpdate}><CloseIcon /></Button>
    </UpdateButtons>
  )

  //need delete function here

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const photo = this.props.photo;
    let displayDate = '';
    if (photo.dateTaken !== undefined) { displayDate = photo.dateTaken.substring(0, 10) }
    return (
      <>
        <Container>
          <Grid item >
            <Card>
              <CardActionArea onClick={this.handleClickOpen}>
                <CardContent>
                  <Imagesize src={photo.photo_url} alt={photo.name} />
                  <h5>{photo.name}</h5>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Container>
        <Dialog
          maxWidth={this.state.maxWidth}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby={photo.name}
        >
          <DialogTop id={photo.name}>
            <h3>{`${photo.name}`}</h3>
            <MoreButton className={styles.cardAction}>
              {this.state.isUpdating ? <this.editDelete /> : <this.moreButton />}
            </MoreButton>
          </DialogTop>
          <DialogContent>
            <ModalImg src={photo.photo_url} />
            <p>{photo.desc} </p>
            <p>Date Taken: {displayDate} </p>
          </DialogContent>
        </Dialog>
      </>
    )
  }
}

const styles = {
  cardAction: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '-4rem',
  }
}

export default SinglePhoto
