import React from 'react'
import PropTypes from 'prop-types'

import { getErrorMessageClient } from '../../helpers/util'

import {
  InputWrapper,
  StyledInput,
  StyledError,
} from './Input.styles'

const CustomInput = props => {
  const {
    input, meta, label, ...rest
  } = props

  return (
    <InputWrapper>
      <StyledInput {...input} {...rest} error={meta.touched && meta.error} />
      {meta.touched
        && meta.error && (
          <StyledError>
            {getErrorMessageClient(meta.error, input.name.toLowerCase())}
          </StyledError>
      )}
    </InputWrapper>
  )
}

CustomInput.defaultProps = {
  input: {},
  meta: {},
  label: '',
}

CustomInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
}

export default CustomInput
