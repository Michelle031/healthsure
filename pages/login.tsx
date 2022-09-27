import React, { useState } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import Logo from '../components/Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const login = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          router.push("/");
      })
      .catch((e) => alert(e.message))
  }
  const register = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        //created
        const user = userCredential.user;
        router.push("/");
    })
    .catch((e) => alert(e.message))
  }
  return (
    <div className='login h-screen text-sm flex flex-col justify-center items-center space-y-3 '>
        <Link href="/">
            <Logo />
        </Link>
        <div className="max-w-md border border-gray rounded-md shadow-sm p-8 space-y-4">
            <h1>Sign in</h1>
            <form className='flex flex-col space-y-4 mb-3'>
                <h5>E-mail</h5>
                <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                <h5>Password</h5>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <button className="effect bg-green-500 hover:bg-yellow-500 text-white font-bold p-2 rounded-md" type='submit' onClick={login}>Sign In</button>
            </form>
            <p className='text-sm'>
                By signing-in you agree to Healthsure's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
            </p>
            <button className="effect bg-yellow-500 hover:bg-green-500 text-white w-full font-bold p-2 rounded-md " onClick={register}>Create your Healthsure Account</button>
        </div>
    </div>
  )
}

export default Login