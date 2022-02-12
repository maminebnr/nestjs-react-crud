import React from "react";
import {
  Link
} from "react-router-dom";
function RowUser({id , email, firstName, lastName, deleteHandler}) {
  return (
    <tr>
    <th scope="row">{id}</th>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td><Link to={`/user/${id}`} className="btn btn-info">update</Link></td>
    <td><button onClick={()=>deleteHandler(id)} className="btn btn-danger">delete</button></td>
  </tr>
  
  )
}

export default RowUser