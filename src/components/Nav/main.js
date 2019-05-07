import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './Nav';
import styled from 'styled-components';
import App from '../Home/App';
import MyDrawer from './Drawer';
import AddPhotoModal from '../Forms/FormsModal';

const Top = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
position: sticky;
top: 4rem;
z-index:1;
`;

class Main extends Component {
  render() {
    return (
      < BrowserRouter>
      <div>
        <Nav/>
        <Top>
            <MyDrawer />
        </Top>
        <Route path="/" exact component={App} />
        <Route path="/AddPhoto/" component={AddPhotoModal} />
      </div>
    </BrowserRouter>
    )
  }
}

export default Main;
