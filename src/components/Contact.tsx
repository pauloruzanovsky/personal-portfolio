import {useState, useEffect, React} from 'react'
import {motion as m} from 'framer-motion'
import {db} from './firebase'
import {collection, addDoc } from "firebase/firestore"; 
import { Github, Linkedin } from 'lucide-react'
import linkedinIcon from '../assets/linkedinIcon.png'


export default function Contact() {

    const [contactName, setContactName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactMessage, setContactMessage] = useState('')
    const [showMessageSentModal, setShowMessageSentModal] = useState(false)


    const sendMessage = async (e, contactName, contactEmail, contactMessage) => {
        e.preventDefault()
        await addDoc(collection(db, 'Contact Messages'), {
            to: ['pauloruzanovsky@gmail.com'],
            message: {
                subject: `${contactName} <${contactEmail}>`,
                html: contactMessage
            }
        })
        setContactName('')
        setContactEmail('')
        setContactMessage('')
        setShowMessageSentModal(true)
    }

    useEffect(() => {
        if(showMessageSentModal)
        setTimeout(() => {
            setShowMessageSentModal(false)
        }, 3000)
    },[showMessageSentModal])


    return(
        <section id='contact' className='h-screen text-base-content flex flex-col items-center'>
            <span className='font-bold text-4xl flex mb-8 text-third'>Contact me</span>     
            <m.form 
                 initial={{opacity:0}}
                 whileInView={{ opacity:1}}
                 viewport={{once:true}}
                 transition={{opacity:{duration:1.5}}}
            className='flex flex-col w-64 font-light '>
                <label htmlFor='name'>Name<span className=' text-red-300'>*</span></label>
                <input type="text" onChange={(e) => {setContactName(e.target.value)}} value={contactName} className='input input-bordered w-full max-w-xs ' id='name'/>
                <label htmlFor='email' className='mt-2'>Email<span className=' text-red-300'>*</span></label>
                <input type='email' onChange={(e) => {setContactEmail(e.target.value)}} value={contactEmail} className='input input-bordered w-full max-w-xs' id='email'/>
                <label htmlFor='message' className='mt-2'>Message<span className=' text-red-300'>*</span></label>
                <textarea onChange={(e) => {setContactMessage(e.target.value)}} value={contactMessage} className='textarea textarea-bordered' id='message'></textarea>
                <button onClick={(e) => {sendMessage(e, contactName, contactEmail, contactMessage)}} className='btn btn-sm m-4'>Get in touch</button>
            </m.form>
            <m.div 
                 initial={{opacity:0}}
                 whileInView={{ opacity:1}}
                 viewport={{once:true}}
                 transition={{opacity:{duration:1.5}}}
            className='flex'>
                <a href="https://github.com/pauloruzanovsky" target="_blank" className='ml-3 hover:bg-base-200 p-2 cursor-pointer rounded-full'>
                    <Github/>
                </a>
                <a href="https://www.linkedin.com/in/pauloruzanovsky/" target="_blank" className='ml-3 hover:bg-base-200 p-2 cursor-pointer rounded-full'>
                    <Linkedin/>
                </a>
            </m.div>
            
            {showMessageSentModal && <div className='mt-7 '>Thank you for your message! I'll return to you as soon as I can.</div>}

        </section>
    )
}