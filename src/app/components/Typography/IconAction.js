import React from 'react'
import PropTypes from 'prop-types'
import IconFont from './IconFont'

const IconAction = ({
  type, icon, lineHeight, color
}) => (<IconFont icon={icon} color={color} type={type} lineHeight={lineHeight} />)

IconAction.defaultProps = {
  type:'fa',
  icon: '',
  color: 'rgba(0, 0, 0, 0.9)',
  lineHeight: '44px'
}

IconAction.propTypes = {
  type: PropTypes.string,
}


export default IconAction
