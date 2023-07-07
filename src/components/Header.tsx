import React from 'react';
import { Link } from 'react-scroll';
import resume from '../assets/Paulo Ruzanovsky Resume.pdf'

export default function Header() {

    return(
        <div className="navbar bg-base-100 sticky top-0 z-10">
        <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" 
          activeClass='active' 
          to='hero' 
          spy={true} 
          smooth={true} 
          offset={-70} 
          duration={500}
        >
          ruza. 
        </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='about' spy={true} smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link to='projects'spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
            <li><a href={resume} download>Resume</a></li>
            <li><Link to='contact'spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
          </ul>
        </div>
      </div>
    )
}