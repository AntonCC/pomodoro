import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.div`
  font-size: 3.2rem;
  margin-bottom: 5.5rem;
  color: ${(props) => props.theme.colors.grey};
`

const Title: React.FC = () => {
  return (
    <StyledTitle>
      pomodoro
    </StyledTitle>
  )
}

export default Title;