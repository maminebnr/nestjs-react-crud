import React from 'react'
import {
    Link
  } from "react-router-dom";
function RowUser({lastName, firstName, id, email, onDeleteHandler}) {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td><Link to={`/user/${id}`} className="btn btn-info">update</Link></td>
      <td><button className='btn btn-danger' onClick={()=>onDeleteHandler(id)}>Delete</button></td>
    </tr>
  )
}

export default RowUser