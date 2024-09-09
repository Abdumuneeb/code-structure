"use client"
import { useState } from 'react';

export default function LoginForm() {
  const [cred, setUserCred] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e:any) =>{
    e.preventDefault()
  }

  const handleChange = (e: any)=>{

    const {name, value} = e.target;
    setUserCred( prevState =>({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div> <h1> Login form</h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className='w-9/12 flex flex-col justify-items-center items-center'>
          <input className='border' type='email' name="email" value={cred.email} onChange={handleChange}/>
          <input type='password' name="password" value={cred.password} onChange={handleChange}/>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

