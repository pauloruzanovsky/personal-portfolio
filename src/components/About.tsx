import React from 'react'
import myself from '../assets/myself.jpeg'
import {motion as m} from 'framer-motion'


export default function About() {

    const birthDate = new Date('1995-09-20')
    const today = new Date()

    const birthDateSeconds = Math.floor(birthDate.getTime() / 1000)
    const todaySeconds = Math.floor(today.getTime() / 1000)

    const diff = todaySeconds - birthDateSeconds
    const myAge = new Date(diff*1000).getUTCFullYear() - 1970

    return(
        <section id='about' className='flex flex-col items-center gap-4 min-h-screen'>
            <h1 className='font-bold text-4xl mb-4'>Who am I?</h1>   
            <div className='flex gap-4 flex-col items-center max-w-6xl md:items-start md:flex-row'>
                <m.img 
                    initial={{y:100, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    viewport={{once:true}}
                    transition={{opacity:{duration:1.5}, y:{duration:1.5}}}

                className=' max-w-screen md:max-w-2xl max-h-96 rounded-md' src={myself}/>
                <div>
                    <section className='text-xl text-base-content leading-normal'>
                        <m.p
                            initial={{y:100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{opacity:{duration:1.5}, y:{duration:1.5}}}
                        >
                            Hello, I'm Paulo Ruzanovsky! I'm a {myAge} years old brazilian guy and I am a self-taught developer. 
                        </m.p>
                        
                        <m.p
                            initial={{y:100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{opacity:{duration:1.5}, y:{duration:1.5}}}
                        className='mt-3'>
                            I have always been fascinated by the power of technology and how it can help people solve problems, 
                        and that is what led me to pursue a career in programming.</m.p> 
                        
                        <m.p 
                            initial={{y:100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{opacity:{duration:1.5}, y:{duration:1.5}}}
                        className='mt-3'>
                            I graduated in 2021 with a degree in Production Engineering, which has given me a solid foundation 
                        in the principles of resource management, logical thinking and process optimization. </m.p>
                        
                        <m.p
                            initial={{y:100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{opacity:{duration:1.5}, y:{duration:1.5}}}
                        className='mt-3'>
                            With my passion for programming and my engineering background, 
                            I strive to develop innovative solutions that can make a positive impact on people's lives.</m.p>
                    </section> 
                </div>
            </div> 
           
        </section>
    )
}