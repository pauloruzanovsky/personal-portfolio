import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {motion as m} from 'framer-motion'
import resume from '../assets/Paulo Ruzanovsky Resume.pdf'


export default function Hero() {
    const [showAlert, setShowAlert] = useState(false)

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000)
    }

    return(
        <div>
            <section id='hero' className='font-bold text-4xl sm:text-7xl flex flex-col min-h-screen'>
                    <m.h1
                         initial={{y:100, opacity:0}}
                         animate={{y:0, opacity:1}}
                        transition={{y:{duration:1}}}

                    className='font-figtree break-normal'>
                        <br></br>
                        <br></br>
                        Hello! I am <Link to='about' spy={true} smooth={true} offset={-100} duration={500} className='inline-block font-bold text-button cursor-pointer animate-changeColor transition-colors hover:text-primary-focus hover:animate-none no-underline' >Paulo Ruzanovsky</Link>,
                    <div>and I like to work with data.</div>
                    </m.h1>             
                    
                    <m.div className='text-2xl font-light'
                         initial={{y:100, opacity:0}}
                         animate={{y:0, opacity:1}}
                        transition={{y:{duration:1}, delay:0.5}}
                    >
                        With a passion for turning raw information into actionable insights, I invite you to explore my
                        <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className='text-primary font-bold cursor-pointer hover:text-primary-focus transition-colors'> Projects</Link> and 
                        <a href={resume} download className='text-primary font-bold cursor-pointer hover:text-primary-focus transition-colors'> Resume</a>.
                    </m.div>
                    <m.div className='text-2xl font-light' 
                         initial={{y:100, opacity:0}}
                         animate={{y:0, opacity:1}}
                         transition={{y:{duration:1}, delay:0.75}}
                    >
                        Get in touch with me through 
                        <a href="https://www.linkedin.com/in/pauloruzanovsky/" spy={true} smooth={true} offset={-100} duration={500} className='text-secondary font-bold cursor-pointer hover:text-secondary-focus transition-colors'> LinkedIn </a>
                        or shoot me an e-mail at <span className='font-bold cursor-pointer text-secondary' onClick={() => copyToClipboard('pauloruzanovsky@gmail.com')}>pauloruzanovsky@gmail.com</span>. 
                    </m.div>
               
            </section>
             { showAlert &&
                <m.div 
                initial={{scale:0}}
                animate={{scale:1}}
                transition={{type:'spring'}}
                
                className="alert alert-success flex sticky bottom-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className='text-xl'>Email copied to clipboard!</span>
                </m.div>}
                </div>
    )
}