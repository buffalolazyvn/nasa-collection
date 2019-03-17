import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: block;
  width: 100%;
  position: relative;
`

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid #CECED2;
  border-radius: 3px;
  height: 62px;

  ${props => props.error
    && css`
      border-color: #ff0000;
      background-color: rgba(255, 0, 0, 0.06);
    `};
`

export const StyledError = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #ff0000;
  margin: 0;
  line-height: 30px;

  &::first-letter {
    text-transform: capitalize;
  }
`
