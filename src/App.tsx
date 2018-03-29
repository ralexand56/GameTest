import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Sprite from './components/Sprite';
import posed from 'react-pose';

const initialState = {
  counter: 0,
  ballPos: { x: 0, y: 0 },
  ballVel: { x: 5, y: 0.098 },
};

const poseProps = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Box = posed.div(poseProps);

const floor = 500;

type State = Readonly<typeof initialState>;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const viewBox = `
  ${window.innerWidth / -2}
  ${100 - window.innerHeight}
  ${window.innerWidth}
  ${window.innerHeight}
`;

const Wrapper = styled.div`
  position: absolute;
  padding: 0px;
  #arc {
    transform-origin: 10% 10%;
    animation: ${rotate} 1s linear infinite;
  }
  #leftAngle {
    position: absolute;
    transform-origin: 10% 10%;
    left: -1000px;
    top: -500px;
    animation: ${rotate} 1s linear infinite;
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
  #mainSVG {
    background: lightblue;
    height: 100vh;
    width: 100vw;
  }
`;

class App extends Component<{}, State> {
  readonly state = initialState;

  componentDidMount() {
    window.requestAnimationFrame(this.gameLoop);
  }

  gameLoop = () => {
    this.setState((prevState: State) => ({
      counter: prevState.counter + 1,
      ballPos: {
        x: prevState.ballPos.x + prevState.ballVel.x,
        y:
          prevState.ballPos.y < floor
            ? prevState.ballPos.y + prevState.ballVel.y * prevState.counter
            : floor,
      },
      ballVel: {
        x: prevState.ballPos.y < floor ? prevState.ballVel.x : 0,
        y: prevState.ballPos.y < floor ? prevState.ballVel.y : 0,
      },
    }));

    window.requestAnimationFrame(this.gameLoop);
  };

  render() {
    const { ballPos } = this.state;
    return (
      <Wrapper>
        <Box />
        <svg id="mainSVG">
          <Sprite x={ballPos.x} y={ballPos.y} />
        </svg>
      </Wrapper>
    );
  }
}

export default App;
