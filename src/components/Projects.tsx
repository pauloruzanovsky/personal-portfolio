import React from 'react'
import wassupImage from '../assets/wassupImage.png'
import lynxEyesImage from '../assets/lynxEyesImage.png'
import flavoraImage from '../assets/flavoraImage.png'
import grooveBuddyImage from '../assets/grooveBuddyImage.png'
import {motion as m} from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: 'GrooveBuddy',
            description: 
                `This is a fullstack application where the user can fetch songs from Spotify and add into their playlist, which is stored in MongoDB.
                It was created with the idea of having a place where people can share their playlists, comment and vote on favorite songs.
                It's still in construction, my plan is for it to be a social media centralized in music.
               `,
            image: grooveBuddyImage,
            techStack:'React, Typescript, MongoDB, NodeJS, ExpressJS, Passport, Tailwind, DaisyUI',
            demoLink:'https://groove-buddy.netlify.app',
            githubLink:'https://github.com/pauloruzanovsky/groove-buddy-client'
        },
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
            title: 'Flavora',
            description: `This website was created as part of the The Odin Project's Shopping Cart project, in which we had to create a simple shopping app with a item list and shopping cart functionality, while implementing at least two Route components.
                            The food recipes and pictures were taken from Eating Well website.`,
            image: flavoraImage,
            techStack:'React, Javascript, Jest',
            demoLink:'https://pauloruzanovsky.github.io/shopping-cart',
            githubLink:'https://github.com/pauloruzanovsky/shopping-cart',
            
            
        },
    ]

    const openLink = (link) => {
        window.open(link)
    }

    const projectElements = projects.map((project) => {
        return(
            <m.div className="card p-2 bg-base-200 shadow-xl max-w-lg-screen"
                initial={{y:100, opacity:0}}
                whileInView={{y:0, opacity:1}}
                viewport={{once:true}}
                transition={{opacity:{duration:1}, y:{duration:1}}}
                key={project.title}  >
            <figure className='rounded-lg w-full cursor-pointer'><img src={project.image} onClick={() => {openLink(project.demoLink)}} alt={project.title}/></figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <p>Tech stack: {project.techStack}</p>
              <div className=" card-actions justify-end">
              <a href={project.demoLink} target="_blank" className='hover:bg-base-300 p-2 cursor-pointer rounded-full' ><ExternalLink /></a>
              <a href={project.githubLink} target="_blank" className=' hover:bg-base-300 p-2 cursor-pointer rounded-full'><Github /></a>
              </div>
            </div>
          </m.div>           
        )
    })
    
    return(
        <section id='projects'>  
            <h1 className='font-bold text-5xl flex justify-center mb-10'>Projects</h1>    
            <section className=' max-w-screen-2xl flex flex-col gap-12'>
                {projectElements}
            </section>        
        </section>
    )
}