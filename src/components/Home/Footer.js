import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <Container>
        <Container1>
            <Button target="_blank" href="https://github.com/LauraLively"rel="noreferrer noopener"><i className="fab fa-github fa-2x"></i></Button>
            <Button target="_blank" href="https://www.linkedin.com/in/laura-lively/"rel="noreferrer noopener"><i className="fab fa-linkedin fa-2x"></i></Button>
            <Button target="_blank" href="https://500px.com/lauralively"rel="noreferrer noopener"><i className="fab fa-500px fa-2x"></i></Button>
        </Container1>
        <Container>
          <Button component={Link} to={'/'}>© 2019 Laura Lively</Button>
        </Container>
        </Container>
      </div>
    )
  }
}

export default Footer;