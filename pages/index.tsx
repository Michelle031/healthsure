import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Plans from '../components/Plans'
import { useStateValue } from '../context/StateProvider';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";

const Home: NextPage = () => {
  const [{ user }, dispatch] = useStateValue();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, (authUser) => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [dispatch])
  return (
    <div className="app w-full bg-[#f2f2f2] h-auto">
      <Head>
        <title>Healthsure</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <Nav />
        <Hero />
        <Benefits />
        <Plans />
        <Footer />
      </main>
    </div>
  )
}

export default Home
