import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Themes
import { COLORS, FONTS } from '../../themes'

const TextStyled = styled.div`
  letter-spacing: 0.11px;
  text-align: left;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  line-height: ${props => props.lineHeight};
  font-weight: ${props => props.fontWeight};
`

const Text = ({
  children,
  fontSize,
  color,
  margin,
  padding,
  lineHeight,
  fontWeight,
}) => (
  <TextStyled
    fontSize={fontSize}
    color={color}
    margin={margin}
    padding={padding}
    lineHeight={lineHeight}
    fontWeight={fontWeight}
  >
    {children}
  </TextStyled>
)

Text.defaultProps = {
  fontSize: FONTS.small,
  color: COLORS.WHITE,
  margin: '0',
  padding: '0 0 0 10px',
  lineHeight: '17px',
  fontWeight: '400',
}

Text.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  lineHeight: PropTypes.string,
  fontWeight: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Text
