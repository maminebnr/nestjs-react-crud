import React from 'react'

function InputGroup({type, label, name, placeholder, onChangeHandler, value}) {
    /* props.type */
  return (
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">{label}</label>
    <input type={type} class="form-control" name={name} placeholder={placeholder} onChange={onChangeHandler} value={value}/>
  </div>
  )
}

export default InputGroup