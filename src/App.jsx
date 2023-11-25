import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './components/Result'
import Summary from './components/Summary'

function App() {
  

  return (
    <div className='flex  justify-center items-center md:w-screen md:h-screen'>
        <div className='w-full md:flex md:w-3/5 md:h-4/5  '>
          <Result/>
          <Summary/>
        </div>
    </div>
   
  )
}

export default App
