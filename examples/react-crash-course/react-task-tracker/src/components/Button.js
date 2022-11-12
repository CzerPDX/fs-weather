import PropTypes from 'prop-types'

import React from 'react'

const Button = (props) => {
  return (
    <button 
      className='btn' 
      onClick={props.onClick}
    >
    {props.text}
    </button>
  )
}

// We can set default props below the component
Button.defaultProps = {
  text: 'Default Btn Text',
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button