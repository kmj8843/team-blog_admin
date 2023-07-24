import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem; 
  border-bottom: 2px solid var(--color-dark);
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 35px 0 5px;
  background: transparent;

  &:focus {
  }
`

const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  font-weight: 500;
  color: var(--color-dark);
  transform: translateY(-50%);
  transition: 0.2s ease;

  ${StyledInput}:focus ~ & {
    top: 0;
  }
`

const Input = ({ children, label }) => {
  return (
    <Wrapper>
      <StyledInput></StyledInput>
      <StyledLabel>{label}</StyledLabel>
    </Wrapper>
  );
}

export default Input;
