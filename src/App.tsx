import Header from './components/Header'
import React, { useEffect } from  'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  useEffect(() => {
    document.title = "ruza's portfolio"
  })

  return (
    
    <div className="bg-base-100 text-primary-content flex flex-col items-center min-h-screen">
      <Header />
      <main className='p-4 flex flex-col gap-10 '>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      </main>
    </div>
  )
}

export default App
