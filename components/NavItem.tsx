import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    text: string
}

function NavItem(props: Props) {
  const router = useRouter();
  const route = () => {
    router.push(`#${props.text.toLowerCase()}`);
  }
  return (
    <div onClick={route} className={`${router.asPath.includes(props.text.toLowerCase()) ? "active" : ""} hover:text-green-500 hover:scale-105 transition-all duration-150 ease-in`}>
        {props.text}
    </div>
  )
}

export default NavItem