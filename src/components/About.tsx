import React from 'react'
import myself from '../assets/myself2.jpg'
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
                            I'm Paulo Ruzanovsky, a {myAge} years old brazilian guy who enjoys working with data and making processes run faster and with less resources.
                        </m.p>
                        
                        <m.p
                            initial={{y:100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{opacity:{duration:1.5}, y:{duration:1.5}}}
                        className='mt-3'>
                            I'm a production engineer with 5+ years of experience, specializing in data analysis. Proficient in SQL, Python, Excel, and BI tools, my focus is on leveraging data to optimize manufacturing processes, enhance product quality, and streamline supply chains.</m.p> 
                        
                        <m.p 
                            initial={{y:100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{opacity:{duration:1.5}, y:{duration:1.5}}}
                        className='mt-3'>
                           My background enables me to reduce costs, drive efficiency, and improve operations. I thrive on turning complex data into actionable insights, fueling strategic growth and innovation. </m.p>
                        
                        <m.p
                            initial={{y:100, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            viewport={{once:true}}
                            transition={{opacity:{duration:1.5}, y:{duration:1.5}}}
                        className='mt-3'>
                            I'm dedicated to shaping a more efficient, data-driven manufacturing landscape, where my skills and passion for problem-solving are put to the test. My goal is to contribute to smarter, more profitable manufacturing operations through continuous improvement and analytics-driven decision-making.</m.p>
                    </section> 
                </div>
            </div> 
           
        </section>
    )
}