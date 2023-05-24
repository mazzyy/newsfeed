import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

function Users() {
    const  {user,token}  =useStateContext()


  return (
    <>
    <div>name {user.name}</div>
    <div>email {user.email}</div>
    <div>number {user.number}</div>
    </>

  )
}

export default Users
