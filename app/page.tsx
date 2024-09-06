"use client"
// import { signIn, signOut, useSession } from 'next-auth/react';
import InitializeChat from './components/chat/initializeChat';
import { useState } from 'react';

export default function Home() {
  const [cred, setUserCred] = useState({
    email: "",
    password: ""
  })
console.log("testing");

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
    <div>
      <InitializeChat/>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <div className='w-9/12 flex flex-col justify-items-center items-center'>
          <input className='border' type='email' name="email" value={cred.email} onChange={handleChange}/>
          <input type='password' name="password" value={cred.password} onChange={handleChange}/>
          <button type='submit'>Submit</button>
        </div>
      </form>
      {/* <p>You are not signed in</p>
      <button onClick={() => signIn()}>Sign in</button> */}
    </div>
  );
}

