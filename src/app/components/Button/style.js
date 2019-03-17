import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.11px;
  line-height: 17px;
  text-align: left;
  border-radius: 3px;
  border: none;
  color: #FFF;

  :hover{
  }

  :active{
  }

  :focus{
    outline: none
  }

  ${props => props.padding && css`
    padding: ${props.padding};
  `}

  ${props => props.isTextCenter && css`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  `}

  ${props => props.margin && css`
    margin: ${props.margin};
  `}

  ${props => props.textTransform && css`
    text-transform: ${props.textTransform};
  `}

  ${props => props.textIndent && css`
    text-indent: ${props.textIndent};
  `}

  ${props => props.fontSize && css`
    font-size: ${props.fontSize};
  `}

  ${props => props.fontWeight && css`
    font-weight: ${props.fontWeight};
  `}

  ${props => props.height && css`
    height: ${props.height};
  `}

  ${props => props.width && css`
    width: ${props.width};
  `}

  ${props => props.bgColor && css`
    background-color: ${props.bgColor};

    :hover{
      color: ${props.bgColor};
      background-color: #FFF;
      border: 1px solid ${props.bgColor};
    }
  `}

  ${props => props.disabled && css`
    cursor: not-allowed;
    opacity: 0.7;
  `}
`

export default StyledButton
