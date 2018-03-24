import React from 'react';
import styled, { keyframes } from 'styled-components';
import CannonBase from './components/CannonBase';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const viewBox = `
  ${window.innerWidth / -2}
  ${100 - window.innerHeight}
  ${window.innerWidth}
  ${window.innerHeight}
`;

const Wrapper = styled.div`
  padding: 0px;
  #arc {
    transform-origin: 10% 10%;
    animation: ${rotate} 2s linear infinite;
  }
  h2,
  h3,
  h4 {
    font-weight: 400px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
  }
  svg {
    background: lightblue;
    height: 100vh;
    width: 100vw;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <svg viewBox={viewBox}>
          <CannonBase />  
          <path
            id="arc"
            d="M 100 100 
            C 100 100, 200 200, 300 100
            C 100 100, 200 200, 100 100"
            stroke="white"
            stroke-width="2"
            fill="transparent"
          />
        </svg>
      </Wrapper>
    );
  }
}

export default App;
