import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { Bars3Icon } from '@heroicons/react/24/solid';
import Logo from './Logo'
import NavItem from './NavItem'

function Nav() {
  const [{user}, dispatch] = useStateValue();
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(false);

  const login = () => {
    if (user) {
      signOut(auth)
      .then(() => {
       //logged out
      }).catch (e => alert(e.message));
    }
  }

  const changeBack = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeBack);

    return() => {
      window.removeEventListener("scroll", changeBack);
    }
  }, [])
  return (
    <nav className={`w-full fixed top-0 left-0 ${navbar ? "bg-yellow-300" : "bg-transparent"} z-50 h-[60px] py-5`}>
        <div className='flex justify-between h-full items-center px-6 lg:px-14 text-white mx-auto'>
        <Logo />
        <div className={`hidden lg:flex items-center h-[60px] justify-center space-x-8 cursor-pointer`}>
            <NavItem text="Home"/>
            <NavItem text="About" />
            <NavItem text="Plans" />
            {user && <p className='text-sm'>Hello {user.email}</p>}
            <Link href={!user ? "/login" : "/"}>
              <button onClick={login} className='rounded-sm bg-transparent border-2 border-green-500 hover:bg-green-500 px-6 py-2'>{user ? "Logout" : "Login"}</button>
            </Link>
        </div>
        <div className='lg:hidden h-7 w-7' onClick={() => setShow(!show)}><Bars3Icon /></div>
        </div>
        <div className={`${show ? "translate-y-[0]": "-translate-y-[400px]"} flex flex-col mt-4 bg-yellow-300 p-4 h-fit text-white items-center justify-center space-y-6 cursor-pointer transition-transform duration-300 ease-in-out `}>
            <NavItem text="Home"/>
            <NavItem text="About" />
            <NavItem text="Plans" />
            {user && <p className='text-sm'>Hello {user.email}</p>}
            <Link href={!user ? "/login" : "/"}>
              <button onClick={login} className='rounded-sm bg-transparent border-2 border-green-500 hover:bg-green-500 px-6 py-2'>{user ? "Logout" : "Login"}</button>
            </Link>
        </div>
    </nav>
  )
}

export default Nav
