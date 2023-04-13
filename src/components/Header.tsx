import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='flex font-light items-start justify-between w-full max-w-screen-2xl  p-4'>
            <Link to='/'>ruza.</Link>
            <ul className='flex gap-4'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </header>
    )
}