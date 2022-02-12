import React from 'react'

function InputGroup({name, type, placeholder, label, onChange , value}) {
  return (
    <div class="mb-3">
        <label  class="form-label">{label}</label>
        <input type={type} name={name} class="form-control" placeholder={placeholder} onChange={onChange} value={value}/>
      </div>
  )
}

export default InputGroup