import React from 'react'

import './Button.css';

const Button = ({text, action}) => {
    const handleAction = (e)=>{
        action(e);
    }
  return (
    <button onClick={handleAction}>
        {text}
    </button>
  )
}

export default Button