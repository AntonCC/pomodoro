import React from 'react'
import styled from 'styled-components'

import Button from '../button/button'

const StyledPomodoroBar = styled.div`
  /* width: 373px;
  height: 63px; */
  padding: 1rem;
  background: ${(props) => props.theme.colors.darkestBlue};
  border-radius: 40px;
  }
`

const PomodoroBar: React.FC = () => {
  return (
    <StyledPomodoroBar>
      <Button>pomodoro</Button>
      <Button className='middle'>short break</Button>
      <Button>long break</Button>
    </StyledPomodoroBar>
  )
}

export default PomodoroBar;