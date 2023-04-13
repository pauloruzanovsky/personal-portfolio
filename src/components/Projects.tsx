import React from 'react'
import wassupImage from '../assets/wassupImage.png'
import lynxEyesImage from '../assets/lynxEyesImage.png'
import flavoraImage from '../assets/flavoraImage.png'
import battleshipImage from '../assets/battleshipImage.png'
import doneImage from '../assets/doneImage.png'
import externalLinkIcon from '../assets/externalLinkIcon.png'
import githubIcon from '../assets/githubIcon.png'
import {motion as m} from 'framer-motion'


export default function Projects() {
    const projects = [
        {
            title: 'Wassup',
            description: 
                "Final project on The Odin Project's curriculum. Here I attempted to replicate a website (Google Chat in this case) trying to implement as many features as I could. It was built with React, Typescript and Firebase technologies, specially Firestore and Auth. This was my first close contact with Firebase functionalities, learned to fetch data from the Firestore database, create and manipulate collections and it's respective documents.",
            image: wassupImage,
            techStack:'React, Typescript, Firebase',
            demoLink:'https://wassup-4a627.firebaseapp.com/',
            githubLink:'https://github.com/pauloruzanovsky/wassup'
        },
        {
            title: 'Lynx Eyes',
            description: 'Inspired by Where is Waldo, Lynx Eyes is a photo-tagging game in which you have to find the three characters in the least amount of time. It was built with React, Javascript and Firebase. I learned how to manage current mouse position via state, considering the height and width of the full image.',
            image: lynxEyesImage,
            techStack:'React, Javascript, Firebase',
            demoLink:'https://whereiswaldo-3572e.web.app/',
            githubLink:'https://github.com/pauloruzanovsky/where-is-waldo',            
        },

        {
            title: 'done.',
            description: `A to-do app created utilizing Javascript and Local Storage. You can add, delete, edit and reorder your to-do list. You can also create projects to categorize your tasks. There is a filter for today and upcoming tasks.`,
            image: doneImage,
            techStack:'Javascript, HTML, CSS',
            demoLink:'https://pauloruzanovsky.github.io/To-Do-app_Project/',
            githubLink:'https://github.com/pauloruzanovsky/To-Do-app_Project',
            
            
        },
        {
            title: 'Flavora',
            description: `This website was created as part of the The Odin Project's Shopping Cart project, in which we had to create a simple shopping app with a item list and shopping cart functionality, while implementing at least two Route components.
                            The food recipes and pictures were taken from Eating Well website.`,
            image: flavoraImage,
            techStack:'React, Javascript, Jest',
            demoLink:'https://pauloruzanovsky.github.io/shopping-cart',
            githubLink:'https://github.com/pauloruzanovsky/shopping-cart',
            
            
        },
        {
            title: 'Battleship',
            description: `Battleship game from The Odin Project's curriculum. You can place ships on the board, change their orientation and the computer has to guess where the ships are located.`,
            image: battleshipImage,
            techStack:'Javascript, HTML, CSS, Jest',
            demoLink:'https://pauloruzanovsky.github.io/Battleship/',
            githubLink:'https://github.com/pauloruzanovsky/Battleship',
        },

    ]

    const projectElements = projects.map((project) => {
        return(
            <m.div 
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                viewport={{once:true}}
                transition={{opacity:{duration:1}, y:{duration:1}}}

            key={project.title} className='flex flex-col gap-5 p-5 rounded-xl bg-gray-900 md:flex-row' >
                <a href={project.demoLink} target="_blank" className='hover:scale-105 transition ease-in-out '>
                    <img src={project.image} alt={project.title} className=' max-w-screen max-h-96 md:max-w-[600px] self-center rounded-xl' />
                </a>
                <div className='flex flex-col'>
                    <div className='text-3xl'>
                        <span className='font-bold font-light'>{project.title}</span>
                    </div>
                    <br></br>
                    <span className='p-0 m-0 text-xl mt-9 text-paragraph leading-normal font-light'>{project.description}</span> 
                    <br></br>
                    <br></br>
                    <div className='flex mt-4 md:mt-auto'>
                    <span className='text-xl font-bold text-third font-light'>Tech Stack: {project.techStack}</span>
                        <a href={project.demoLink} target="_blank" className='ml-auto cursor-pointer' > 
                            <img src={externalLinkIcon} alt='external link icon' className='h-6 hover:brightness-50 transition-all'/>
                        </a>
                        <a href={project.githubLink} target="_blank" className='ml-3 cursor-pointer'>
                            <img src={githubIcon} alt='external link icon' className='h-6 hover:brightness-75 transition-all' />   

                        </a>
                    </div> 
                                
                </div>
                
            </m.div>)
    })
    return(
        <div>  
            <span className='font-bold text-5xl flex justify-center p-20 text-third'>Projects</span>    
            <section className=' max-w-screen-2xl flex flex-col gap-12'>
                {projectElements}
            </section>        
        </div>
    )
}