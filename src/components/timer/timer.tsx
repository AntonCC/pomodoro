import React from 'react'
import styled from 'styled-components'

const StyledTimer = styled.div`
  height: 510px;
  width: 510px;
  background: linear-gradient(-45deg, #2E325A, #0E112A);
  filter: drop-shadow(-100px -100px 100px #272C5A) drop-shadow(150px 150px 100px #121530);
  border-radius: 50%;
`

const Timer: React.FC = () => {
  return (
    <StyledTimer>

    </StyledTimer>
  )
}

export default Timer;