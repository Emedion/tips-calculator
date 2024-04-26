// import React from 'react'
// import { IoPersonSharp } from 'react-icons/io5'
// import {FaNairaSign} from  "react-icons/fa6";
// import { useState } from 'react';

// const LeftSide = (props) => {
//   const [bill, newBill] = useState()
//   const handleBill = (e)=>(
//     newBill(e.target.value)
//   )

//   let [custom, newCustom] = useState()

//   const handleCustom = (e) => (
//     newCustom(e.target.value)
//   )

//   const [people, setPeople] = useState()

//   const handlePeople = (e) =>(
//     setPeople(e.target.value)
//   )
  // return (
  //   <div className='mx-6 h-80 mt-7 rounded-xl px-2 w-96 text-cyan-800 font-semibold font-mono'>
  //     <p className='font-semibold my-3'>Bill</p>
  //     <div>
  //       <div className='flex rounded-lg relative'>
  //         <input placeholder='0' value={bill} onChange = {handleBill} className='border placeholder placeholder:text-slate-300 text-right hover:border-cyan-300 border-transparent px-3 py-2 bg-gray-100 w-full h-8 rounded-lg focus:outline-cyan-300'/>
  //         <FaNairaSign className='absolute mt-2.5 text-xs text-slate-400 mx-2.5'/>
  //       </div>
  //     </div>
  //     <p className='text-px mt-5 mb-2'>Select Tip %</p>
  //     <div className='grid grid-cols-3 text-white gap-3 text-center'>
  //       <div className='h-10 w-24 bg-cyan-900 hover:bg-cyan-500 rounded-lg pt-2'>
  //         <button value={(0.05 * bill)/people} className='text-center'>5%</button>
  //       </div>
  //       <div className='bg-cyan-900 hover:bg-cyan-500 rounded-lg pt-2'>
  //         <button value={(0.1 * bill)/people}>10%</button>
  //       </div>
  //       <div className='bg-cyan-900 hover:bg-cyan-500 rounded-lg pt-2'>
  //         <button value={(0.15 * bill)/people}>15%</button>
  //       </div>
  //       <div className='bg-cyan-900 hover:bg-cyan-500 rounded-lg pt-2 h-10'>
  //         <button value={0.25 * bill}>25%</button>
  //       </div>
  //       <div className='bg-cyan-900 rounded-lg h-10 hover:bg-cyan-500 pt-2'>
  //         <button value={(0.5 * bill)/people}>50%</button>
  //       </div>
  //       <input placeholder="Custom" value = {(custom = custom * bill)/people} onChange={handleCustom} className='text-right text-cyan-800 bg-gray-300 text-cyan h-10 w-24 rounded-lg px-3 placeholder:text-cyan-700 placeholder:text-center border hover:border-cyan-300 focus:outline-cyan-300'/>
  //       </div>
  //     <p className='mt-6 mb-2 ml-1'> Number of People</p>
  //     <div>
  //       <div className='relative'>
  //         <IoPersonSharp className="absolute mx-2 mt-1.5 text-slate-300" />
  //         <input
  //         placeholder='0'
  //         value={people} onChange={handlePeople} className='bg-gray-100 h-8 placeholder placeholder:text-slate-300 rounded-lg text-right px-3 py-2 w-full border hover:border-cyan-400 focus:outline-cyan-400 coursor-cyan-500'/>
  //       </div>
  //     </div>
  //   </div>
//   )
// }

// export default LeftSide
