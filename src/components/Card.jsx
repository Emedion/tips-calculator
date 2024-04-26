import React from 'react'
// import LeftSide from './LeftSide'
// import RightSide from './RightSide'
import { useState } from 'react'
import { FaNairaSign } from 'react-icons/fa6'
import { IoPersonSharp } from 'react-icons/io5'

const Card = () => {

    const [bill, newBill] = useState(null)
    const handleBill = (e)=>(
      newBill(e.target.value)
    )
    
    let [tip, setTip] = useState('0.00')
    
        
    let [click, setClick] = useState(false)

    const [reset, setReset] = useState(false)
    const handleReset = () => (
      setReset(!reset),
      newBill(''),
      setTip('0.00'),
      newCustom(''),
      setPeople(''),
      setClick(false),
      setTotal('0.00')
    )

    const [total, setTotal] = useState('0.00')

    const handleTip = (e) =>{
      setClick(true)
      setTip(people > 0 ? (eval(bill * e.target.value)/people).toFixed(2) : '0.00')
      setTotal(people > 0 ? ((eval(bill * e.target.value)).toFixed(2)) : '0.00')
    }
  
    let [custom, newCustom] = useState('')
  
    const handleCustom = (e) => (
      newCustom(e.target.value)
    )
  
    const [people, setPeople] = useState(null)
  
    const handlePeople = (e) =>(
      setPeople(e.target.value)
      // setClick(true)
    )
  return (
    <div className='md: absolute mx-auto inset-0 my-56'>
      <div className='flex justify-center border mx-auto max-w-screen-md h-96 mt-12 rounded-xl shadow-xl bg-white'>
        
        {/*  left side of the card */}

            
        <div className='mx-6 h-80 mt-7 rounded-xl px-2 w-96 text-cyan-800 font-semibold font-mono'>
          <p className='font-semibold my-3'>Bill</p>
          <div>
            <div className='flex rounded-lg relative'>
              <input placeholder='0' value={bill} onChange = {handleBill} className='border placeholder placeholder:text-slate-300 text-right hover:border-cyan-300 border-transparent px-2 py-2 bg-gray-100 w-full h-8 rounded-lg focus:placeholder-transparent focus:outline-cyan-300'/>
              <FaNairaSign className='absolute mt-2.5 text-xs text-slate-400 mx-2.5'/>
            </div>
          </div>
          <p className='text-sm pl-1 mt-5 mb-2'>Select Tip %</p>
          <div className='grid grid-cols-3 text-white gap-3 text-center'>
            <div className='h-10 w-24 bg-cyan-900 hover:bg-cyan-500 rounded-lg pt-2'>
              <button onClick={handleTip} value='0.05' className='coursor-pointer text-center'>5%</button>
            </div>
            <div className='bg-cyan-900 hover:bg-cyan-500 rounded-lg pt-2'>
              <button className='coursor-pointer' type='number' onClick={handleTip} value='0.1'>10%</button>
            </div>
            <div className='bg-cyan-900 hover:bg-cyan-500 rounded-lg pt-2'>
              <button className='coursor-pointer' type = 'number' onClick={handleTip} value='0.15'>15%</button>
            </div>
            <div className='bg-cyan-900 hover:bg-cyan-500 rounded-lg pt-2 h-10'>
              <button className='coursor-pointer' type='number' value='0.25' onClick={handleTip}>25%</button>
            </div>
            <div className='bg-cyan-900 rounded-lg h-10 hover:bg-cyan-500 pt-2'>
              <button className='coursor-pointer' type='number' onClick={handleTip} value='0.5'>50%</button>
            </div>
            <input type='number' placeholder="Custom" value = {custom} onChange={handleCustom} className='text-right text-cyan-800 bg-gray-300 text-cyan h-10 w-24 rounded-lg px-3 placeholder placeholder:text-cyan-700 placeholder:text-center border focus:placeholder-transparent hover:border-cyan-300 focus:outline-cyan-300'/>
            </div>
          <div className='flex justify-between px-1'>
            <p className='text-sm mt-7 mb-2 ml-1'> Number of People</p>
            {tip === '0.00' && click? <p className='mt-6 pt-1.5 justify-space ml-1 text-red-500 text-sm'> Can't be zero</p> : " "}
          </div>
          <div>
            <div className='relative'>
              <IoPersonSharp className="absolute mx-2 mt-1.5 text-slate-300" />
              <input type='number'
              placeholder='0'
              value={people} onChange={handlePeople} className='bg-gray-100 h-8 placeholder focus:placeholder-transparent placeholder:text-slate-300 rounded-lg text-right px-3 py-2 w-full border hover:border-cyan-400 focus:outline-cyan-400 coursor-cyan-500'/>
            </div>
          </div>
        </div>

        {/*  right side of the card */}

        {/* <RightSide tip = {tip} people = {people} custom = {custom} bill = {bill}/> */}

          <div className='w-96 h-80 mt-7 mr-5 rounded-xl bg-cyan-900 border text-white font-semibold font-mono px-8 py-12'>
        <div>
          <div className='flex gap-16'>
            <div className=''>
              <p className='fontbold text-sm'>Tip Amount</p>
              <p className='fontbold text-sm text-slate-400'>/person</p>
            </div>

            <div className='flex items-center'>
              <FaNairaSign  className='text-2xl pr-2 font-bold text-cyan-400 pt-1'/>
              <p className='text-cyan-400 text-4xl'>
              {tip}</p>
            </div>
          </div>
          <div className='flex gap-20 mt-8'>
            <div className='mr-2'>
                <p className='fontbold text-sm'>Total</p>
                <p className='fontbold text-sm text-slate-400'>/person</p>
              </div>

              <div className='flex items-center'>
                <FaNairaSign  className='text-2xl pr-2 text-cyan-400 pt-1'/>
                <p className='text-cyan-400 text-4xl'>
                {total}</p>
              </div>
            </div>
            <button onClick={handleReset} className='bg-cyan-500 hover:bg-cyan-300 w-full h-10 mt-24 rounded-lg text-center text-cyan-800 font-bold'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
