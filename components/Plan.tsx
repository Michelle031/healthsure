import { useRouter } from 'next/router';
import React from 'react'
import { useStateValue } from '../context/StateProvider';
import { checkout } from "./checkout"

interface Props {
    id: string,
    plan: string,
    price: number,
    healthcare: string,
    part: number,
}

function Plan(props: Props) {
    const [{plan, user}, dispatch] = useStateValue();
  const router = useRouter();
  const selectPlan = () => {
      if (user) {
        dispatch({
            type: "SET_PLAN",
            plan: {
                ...props,
            }
        });
        checkout({
          lineItems: [{
            price: props.id,
            quantity: 1,
          }]
        });
      } else {
         router.push("/login");
      }
  }
  return (
    <div className='plan group'>
                <h3>{props.plan}</h3>
                <p>Fast track design thinking yet quarterly <br/> sales are at an all-time low </p>
                <p className="amt">${props.price}<span>/month</span></p>
                <button onClick={selectPlan}>Purchase now</button>
                <ul>
                    <li>{props.healthcare} months of health care</li>
                    <li>{props.part}-part health plan </li>
                    <li>Health plan  updates</li>
                </ul>
    </div>
  )
}

export default Plan