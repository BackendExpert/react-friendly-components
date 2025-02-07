import React, { useEffect, useState } from 'react'

const DefualtInput = ({ type, value, name, placeholder, required, onChange }) => {
  return (
    <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={!!required}

        className='
            h-12 
            bg-gray-200/50 
            w-full 
            border-b 
            border-gray-300 
            pl-2 
            duration-500 
            focus:outline-none 
            focus:border-[#FF5722]
        '
    />
  )
}

export default DefualtInput