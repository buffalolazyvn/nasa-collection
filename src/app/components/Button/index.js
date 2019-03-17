import React from 'react'
import PropTypes from 'prop-types'

// Styles
import StyledButton from './style'

const Button = ({
  onClick,
  children,
  type,
  fontSize,
  fontWeight,
  height,
  width,
  padding,
  margin,
  bgColor,
  textIndent,
  disabled,
  isTextCenter,
}) => (
  <StyledButton
    onClick={onClick}
    type={type}
    fontSize={fontSize}
    fontWeight={fontWeight}
    height={height}
    width={width}
    padding={padding}
    margin={margin}
    bgColor={bgColor}
    textIndent={textIndent}
    disabled={disabled}
    isTextCenter={isTextCenter}
  >
    {children}
  </StyledButton>
)

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  bgColor: PropTypes.string,
  disabled: PropTypes.bool,
  isTextCenter: PropTypes.bool,
  textIndent: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  fontSize: '14px',
  height: '35px',
  padding: '8px 13px 8px 0',
  margin: '0',
  bgColor: '#784CC0',
  textIndent: '',
  disabled: false,
  isTextCenter: false,
  fontWeight: '400',
}

export default Button
