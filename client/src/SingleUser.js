import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import InputGroup from './components/InputGroup'

function SingleUser(props) {
    const {id} = useParams()
   const navigate = useNavigate()

  const [form, setForm] =  useState({})

 const OnchangeHandler = (e)=>{
   setForm({
     ...form,
    [e.target.name]: e.target.value
   })
 }

 const onSubmitHandler = (e)=>{
   e.preventDefault();
   axios.put(`/user/${id}`, form)
   .then(res=>{
     navigate("/")
   })
}

  /* get all users */
  useEffect(()=>{
    axios.get(`/user/${id}`)
    .then(res=>{
      setForm(res.data)
    })
  }, [])

  return (
    <div className="App container">
      {/* form */}
      <form onSubmit={onSubmitHandler}>
      <InputGroup name="firstName" type="text" placeholder="Your firsname" label="firstname" onChange={OnchangeHandler} value={form.firstName}/>
      <InputGroup name="lastName" type="text" placeholder="Your lastname" label="lastname" onChange={OnchangeHandler} value={form.lastName}/>
      <InputGroup name="email" type="text" placeholder="Your email" label="Email" onChange={OnchangeHandler} value={form.email}/>
      <button type="submit" class="btn btn-primary">update user</button>
      </form>
      </div>
  )
}

export default SingleUser