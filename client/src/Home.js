import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputGroup from './components/InputGroup'
import RowUser from './components/RowUser'

function Home() {

  const [data, setData]  = useState([])
  const [form, setForm]  = useState({})
 

  /* add user */
const onChangeHandler = (e)=>{
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}  

const onSubmitHandler = (e)=>{
  e.preventDefault();
  axios.post('/user/register', form)
  .then(res=>{
    alert('success')
  })
}


/* fetch all users */
 useEffect(()=>{
   axios.get('/user')
   .then(res=>{
     setData(res.data)
   })
 })


 /* delete user */

 const onDeleteHandler = (id)=>{
  if(window.confirm("are you sure to delete this user?")){
   axios.delete(`/user/${id}`)
   .then(res=>{
     alert('success')
   })
  }
 }

  return (
    <div className='container mt-4'>
      {/* form */}
     <form onSubmit={onSubmitHandler}>
      <InputGroup type="text" label="Lastname" name="lastName" placeholder="lastname ...." onChangeHandler={onChangeHandler}/>
      <InputGroup type="text" label="FirstName" name="firstName" placeholder="firstname ...." onChangeHandler={onChangeHandler}/>
      <InputGroup type="email" label="Email" name="email" placeholder="email ...." onChangeHandler={onChangeHandler}/>
      <button type="submit" class="btn btn-primary">Add user</button>
    </form>

    {/* table */}
    <h2>list of users</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map(({lastName, firstName, _id, email})=>(
        <RowUser lastName={lastName} firstName={firstName} id={_id} email={email} onDeleteHandler={onDeleteHandler}/>
      ))
    }
  </tbody>
</table>
    </div>
  )
}

export default Home