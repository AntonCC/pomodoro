import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  padding: 1.5rem 3.5rem;
  outline: none;
  border: none;
  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 40px;
  ${({ className }) => className && css`margin: 0 1rem;`}
`
interface Props {
  className?: string
}

const Button: React.FC<Props> = ({ className, children }) => {
  return (
    <StyledButton className={className}>
      <p>
        {children}
      </p>
    </StyledButton>
  )
}

export default Button;