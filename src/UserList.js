import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'
import UserCard from './UserCard'


const UserList = () => {
  const [user,setUser]=useState("")
  useEffect(()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) =>setUser(res.data))
    .catch((err)=>console.loge (err));
  },[]);  
  return <div>{user && user.map((el) => <UserCard el={el}/>)}</div>
}

export default UserList;
