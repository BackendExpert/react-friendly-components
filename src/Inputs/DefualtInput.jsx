import React from 'react'

const DefualtInput = ({ type, value, name, placeholder, required, onChange }) => {
  return (
    <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={!!required}
        onChange={onChange}
        className='
            
        '
    />
  )
}

export default DefualtInput