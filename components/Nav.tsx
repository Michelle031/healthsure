import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import Logo from './Logo'
import NavItem from './NavItem'

function Nav() {
  const [{user}, dispatch] = useStateValue();
  const [navbar, setNavbar] = useState(false);

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
    <nav className={`fixed top-0 left-0 ${navbar ? "bg-yellow-300" : "bg-transparent"} z-50 h-[60px] flex justify-between w-full items-center px-6 lg:px-14 py-5 text-white mx-auto`}>
        <Logo />
        <div className='flex items-center fixed h-[60px] bg-yellow-300 lg:bg-transparent bottom-0 left-0 lg:static lg:min-w-fit min-w-[100vw] p-4 lg:0 justify-center lg:justify-0 space-x-8 cursor-pointer '>
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
