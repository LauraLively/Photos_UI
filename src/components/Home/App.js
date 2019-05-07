import React from 'react';
import styled from 'styled-components';
import DisplayPhotos from './DisplayPhotos';


//styled components

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  `;
const MasonryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2rem 0 2rem;
`;

function App() {
  return (
      <MasonryContainer >
        <DisplayPhotos />
      </MasonryContainer>
  );
}


export default App;
