import { useState } from 'react'
import Header from './components/Header'
import React from  'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'


function App() {

  const [currentPage, setCurrentPage] = useState('')

  return (

    <div className="bg-background flex flex-col items-center min-h-screen text-white">
      <Header />
        <div className='flex flex-col items-center max-w-screen-2xl '>     
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>

      
    </div>
  )
}

export default App
