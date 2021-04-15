import React from 'react';
import styled from 'styled-components'

import Title from './components/title/title'
import PomodoroBar from './components/pomodoro-bar/pomodoro-bar'
import Timer from './components/timer/timer'

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App: React.FC = () => {
  return (
    <StyledApp>
      <Container>
        <Title />
        <PomodoroBar />
        <Timer />
      </Container>
    </StyledApp>  
  );
}

export default App;
