import {useState, useEffect, React} from 'react'
import {motion as m} from 'framer-motion'
import {db} from './firebase'
import {collection, addDoc } from "firebase/firestore"; 

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
        <div className='h-screen flex flex-col items-center'>
            <span className='font-bold text-4xl flex mb-8 text-third'>Contact me</span>     
            <m.form 
                 initial={{opacity:0}}
                 whileInView={{ opacity:1}}
                 viewport={{once:true}}
                 transition={{opacity:{duration:1.5}}}
            className='flex flex-col w-64 font-light '>
                <label htmlFor='name'>Name<span className=' text-red-300'>*</span></label>
                <input type="text" onChange={(e) => {setContactName(e.target.value)}} value={contactName} className=' bg-background outline outline-1 rounded outline-gray-700 ' id='name'/>
                <label htmlFor='email' className='mt-2'>Email<span className=' text-red-300'>*</span></label>
                <input type='email' onChange={(e) => {setContactEmail(e.target.value)}} value={contactEmail} className='bg-background outline outline-1 rounded outline-gray-700' id='email'/>
                <label htmlFor='message' className='mt-2'>Message<span className=' text-red-300'>*</span></label>
                <textarea onChange={(e) => {setContactMessage(e.target.value)}} value={contactMessage} className='bg-background outline outline-1 outline-gray-700 rounded resize-none ' id='message'></textarea>
                <button onClick={(e) => {sendMessage(e, contactName, contactEmail, contactMessage)}} className='mt-4 bg-third text-white p-2 rounded-md hover:brightness-75 transition-all'>Get in touch</button>
            </m.form>
            {showMessageSentModal && <div className='mt-7 '>Thank you for your message! I'll return to you as soon as I can.</div>}
        </div>
    )
}