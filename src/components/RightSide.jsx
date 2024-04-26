import React from 'react'
import {FaNairaSign} from  "react-icons/fa6";
import { useState } from 'react';

const RightSide = ({tip = 0.00, total = 0.00, bill, custom, people}) => {

  return (
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
                0.00</p>
            </div>
          </div>
          <button className='bg-cyan-500 hover:bg-cyan-300 w-full h-10 mt-24 rounded-lg text-center text-cyan-800 font-bold'>Reset</button>
        </div>
    </div>
  )
}

export default RightSide;
