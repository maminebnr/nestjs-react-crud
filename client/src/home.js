import logo from './logo.svg';
import './App.css';
import InputGroup from './components/InputGroup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RowUser from './components/RowUser';

function Home() {
   
  const [data, setData] = useState([])
  const [form, setForm] =  useState({})

  /* 
  {
    email: youssef@live.fr
  }
  */
 const OnchangeHandler = (e)=>{
   setForm({
     ...form,
    [e.target.name]: e.target.value
   })
 }

 const onSubmitHandler = (e)=>{
   e.preventDefault();
   axios.post('/user/register', form)
   .then(res=>{
     console.log(res)
   })
 }


 /* delete */

 const deleteHandler = (id)=>{
   
    if(window.confirm("are you sure to delete this user?")){
      axios.delete(`/user/${id}`)
      .then(res=>{
        console.log('deleted')
      })
    }

 }

  /* get all users */
  useEffect(()=>{
    axios.get("/user")
    .then(res=>{
      setData(res.data)
    })
  })


  return (
    
    <div className="App container">
      {/* form */}
      <form onSubmit={onSubmitHandler}>
      <InputGroup name="firstName" type="text" placeholder="Your firsname" label="firstname" onChange={OnchangeHandler}/>
      <InputGroup name="lastName" type="text" placeholder="Your lastname" label="lastname" onChange={OnchangeHandler}/>
      <InputGroup name="email" type="text" placeholder="Your email" label="Email" onChange={OnchangeHandler}/>
      <button type="submit" class="btn btn-primary">Add user</button>
      </form>
      {/* form */}
       <hr/>
      {/* table */}
      <h2>All users</h2>
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
         data.map(({_id, email, lastName, firstName})=>(
           <RowUser id={_id} email={email} lastName={lastName} firstName={firstName} deleteHandler={deleteHandler}/>
         ))
       }
      </tbody>
      </table>
      {/* table */}
    </div>
  );
}

export default Home;
