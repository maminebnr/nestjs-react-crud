import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import InputGroup from './components/InputGroup'

function Details() {
    const [form, setForm]  = useState({})
   const {id} =  useParams()
   const navigate = useNavigate()
     /* add user */

    /* add user */
const onChangeHandler = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }  
  
  /* fetch all users */
   useEffect(()=>{
     axios.get(`/user/${id}`)
     .then(res=>{
       setForm(res.data)
     })
   },[])

   const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`/user/${id}`, form)
    .then(res=>{
        navigate('/')
    })
  }
  return (
    <form onSubmit={onSubmitHandler}>
   <InputGroup type="text" label="Lastname" name="lastName" placeholder="lastname ...." onChangeHandler={onChangeHandler} value={form.lastName}/>
      <InputGroup type="text" label="FirstName" name="firstName" placeholder="firstname ...." onChangeHandler={onChangeHandler} value={form.firstName}/>
      <InputGroup type="email" label="Email" name="email" placeholder="email ...." onChangeHandler={onChangeHandler} value={form.email}/>
    <button type="submit" class="btn btn-primary">update user</button>
  </form>
  )
}

export default Details