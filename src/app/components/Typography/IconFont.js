import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'


const SpanIconWrapper = styled.span`
  ${props => props.padding && css`
    padding: ${props.padding};
  `}

  ${props => props.lineHeight && css`
    line-height: ${props.lineHeight};
  `}

  ${props => props.color && css`
    color: ${props.color};
  `}

  &::before {
    ${props => props.fontSize && css`
      font-size: ${props.fontSize};
    `}
  }
`

const IconFont = ({
  width, height, color, icon, fontSize, padding, lineHeight, type, 
}) => (<SpanIconWrapper width={width} height={height} color={color} fontSize={fontSize} padding={padding} lineHeight={lineHeight} className={`${type} fa-${icon}`} />)

IconFont.defaultProps = {
  color: 'white',
  icon: '',
  fontSize: '17px',
  lineHeight: '0',
  padding:'0',
  type:'fa',
}

IconFont.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  padding: PropTypes.string,
  type: PropTypes.string,
}


export default IconFont
