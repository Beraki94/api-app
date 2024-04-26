import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        setListOfUser(res.data);
    })
    }, [])
  return (
    <div className='main--user'>
        {listOfUser.map(user => 
        
        <div key={user.id} className='user--list'>
          <p><span>Name:</span> {user.name}</p>
          <p><span>Username:</span> {user.username}</p>
          <p><span>Email:</span> {user.email}</p>
          <p><span>Phone:</span> {user.phone}</p>
          <p><span>Website:</span> {user.name}</p>
          <p><span>Company:</span> {user.company.name}</p>

          <div className='user--list--address'>
              <span>Address:</span>
              <p>`{user.address.street} {user.address.suite} {user.address.city}`</p> 
          </div>
          
        </div>)}
    </div>
  )
}

export default UserList