import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Sprite from './components/Sprite';
import posed from 'react-pose';
// import { spring } from 'popmotion';
// import { TweenProps } from 'popmotion/animations/tween/types';

const initialState = {
  counter: 0,
  ballPos: { x: 0, y: 0 },
  ballVel: { x: 5, y: 0.098 },
  isOpen: false,
};

const sidebarProps = {
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 100,
    staggerDirection: 1,
  },
  closed: { x: '-100%', delay: 300 },
};

const itemProps = {
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
};

const Sidebar = posed.ul(sidebarProps);
const Item = posed.li(itemProps);

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
    setInterval(
      () => this.setState(prevState => ({ isOpen: !prevState.isOpen })),
      2000,
    );
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
    const { ballPos, isOpen } = this.state;
    return (
      <Wrapper>
        <Sidebar
          elementType="ul"
          className="sidebar"
          pose={isOpen ? 'open' : 'closed'}
          poseProps={sidebarProps}
        >
          {Array(10)
            .fill('')
            .map((x, i) => (
              <Item
                key={i}
                elementType="li"
                className="item"
                poseProps={itemProps}
              >
                {i + 1}
              </Item>
            ))}
        </Sidebar>

        <svg id="mainSVG">
          <Sprite x={ballPos.x} y={ballPos.y} />
        </svg>
      </Wrapper>
    );
  }
}

export default App;
