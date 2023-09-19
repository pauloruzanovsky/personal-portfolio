import React from 'react'
import tableauImage from '../assets/tableauImage.png'
import qlikImage from '../assets/qlikImage.png'
import pbiImage from '../assets/pbiImage.png'
import {motion as m} from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
    const projects = [
        {
            title: 'Weekly Demand Analysis',
            description: 
                `This visualization was created on Qlik Sense to show weekly demand variations of all customers.
                It includes KPIs UNC (forecast), approved forecast (forecast without capacity or raw material constraints) and deltas. It focuses on the top and bottom five variations,
                includes a delta by customer segment, a line graph to show the monthly delta and a mekko chart that focuses on the top three customers by demand volume, by month.
               `,
            image: qlikImage,
            demoLink: null,
            techStack:'Extracted data from SAP to Excel, and uploaded Excel file on Qlik.',
    
        },
       
       
        {
            title: 'Airbnb Price Analysis',
            description: `This visualization was created on Tableau to show how the prices vary between zipcodes and number of bedrooms.`,
            image: tableauImage,
            techStack:'Cleaned data on Excel and uploaded to Tableau.',
            demoLink:'https://public.tableau.com/views/AirBnBFullProject_16934434118360/Dashboard1?:language=pt-BR&publish=yes&:display_count=n&:origin=viz_share_link',

            
            
        },
        {
            title: 'Data Professional Survey Breakdown',
            description: `This Power BI visualization provides insights into the field of data-related jobs. It presents data on the countries with the highest number of professionals, average salaries by job title, preferred programming languages, perceived difficulty in entering data positions, and overall job satisfaction levels.`,
            image: pbiImage,
            techStack:'Cleaned data on Excel and uploaded to Power BI.',
            demoLink:'',
            githubLink:'https://github.com/pauloruzanovsky/shopping-cart',
            
            
        },
    ]

    const openLink = (link) => {
        link && window.open(link)
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
              {project.demoLink && <a href={project.demoLink} target="_blank" className='hover:bg-base-300 p-2 cursor-pointer rounded-full' ><ExternalLink /></a> }
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