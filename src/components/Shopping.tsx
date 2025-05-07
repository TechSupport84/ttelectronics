import React from 'react'
import OrderItems from '../dashboard/orders/OrderItems'

const  Shopping:React.FC=()=>{
  return (
    <div className='flex flex-col h-full  '>
        <div className=" flex flex-col mb-[50%] gap-10">
         <h3 className='text-red-800 font-bold  text-2xl mt-4 '>Shopping</h3>
         <OrderItems/>
         </div>
      
    </div>
  )
}

export default Shopping