import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'


interface Props {
  buttonId: number,
  middle?: boolean,
  active: number,
  setActive: (toActivate: number) => void
}

interface ButtonProps {
  // using just id was causing problems
  buttonId: number,
  middle?: boolean,
  active: number
}

const StyledButton = styled.button<ButtonProps>`
  padding: 1.5rem 3.5rem;
  outline: none;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  ${({ middle }) => 
    middle && 
      css`
        margin: 0 1rem;
      `
  };
  ${({ buttonId, active}) => 
    buttonId === active
      ? css`
          background: ${({ theme }) => theme.colors.red};
        `
      : css`
          color: ${({ theme }) => theme.colors.grey};
          background: ${({ theme }) => theme.colors.darkestBlue};
        `
  }
`
  /* ${({ active }) => 
    !active && 
      css`
        color: ${({ theme }) => theme.colors.grey};
        background: ${({ theme }) => theme.colors.darkBlue};
      `
  }; */
const Button: React.FC<Props> = ({ buttonId, active, setActive, middle, children }) => {

  return (
    <StyledButton buttonId={buttonId} active={active} middle={middle} onClick={() => setActive(buttonId)}>
      <p>
        {children}
      </p>
    </StyledButton>
  )
}

export default Button;