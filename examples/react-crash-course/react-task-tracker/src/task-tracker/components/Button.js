import PropTypes from 'prop-types'

import React from 'react'

const Button = ({ extraClasses, onClick, text }) => {
  let btnClasses = 'btn'
  // If additional classes are provided, add them here. They will still have the default 'btn' class
  if (extraClasses) {
    btnClasses += ` ${extraClasses}`
  }

  return (
    <button 
      className={btnClasses}
      onClick={onClick}
    >
    {text}
    </button>
  )
}

// We can set default props below the component
Button.defaultProps = {
  text: 'Default Btn Text',
  className: 'btn'
}

Button.propTypes = {
  text: PropTypes.string,
}

export default Button