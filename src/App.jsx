import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='bg-cyan-100 h-screen w-full items-center absolute'>
      <div className='relative top-40'>
        <p className='text-center text-lg font-semibold text-cyan-700 text-slate-500 font-mono tracking-widest'>SPLI<br />TTER</p>
      </div>
      <Card className= "relative top-40"/>
    </div>
  )
}

export default App

