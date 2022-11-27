import React from 'react'

const Button = ({ btnClasses, onClick, text, type, icon }) => {
  
  return (
    <button 
      className={btnClasses}
      onClick={onClick}
      type={type}
    >
    {text} {icon}
    </button>
  )
}

// We can set default props below the component
Button.defaultProps = {
  text: 'Default Btn Text',
  btnClasses: 'btn',
  type: 'button'
}

export default Button