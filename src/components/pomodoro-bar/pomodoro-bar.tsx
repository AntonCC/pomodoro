import React, { useState } from 'react'
import styled from 'styled-components'

import Button from '../button/button'

const StyledPomodoroBar = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.colors.darkestBlue};
  border-radius: 40px;
  margin-bottom: 4.5rem;
  z-index: 5;
`

const PomodoroBar: React.FC = () => {
  const [active, setActive] = useState(1)

  return (
    <StyledPomodoroBar>
      <Button buttonId={1} active={active} setActive={setActive}>pomodoro</Button>
      <Button buttonId={2} active={active} setActive={setActive} middle>short break</Button>
      <Button buttonId={3} active={active} setActive={setActive}>long break</Button>
    </StyledPomodoroBar>
  )
}

export default PomodoroBar;