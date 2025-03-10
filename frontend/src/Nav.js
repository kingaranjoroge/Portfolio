import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaHome, FaUser, FaAddressBook, FaServicestack, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaBriefcase } from 'react-icons/fa'

const Nav = ({isNavVisible, toggleNav}) => {

  return (
    <nav id="Nav" className={isNavVisible ? 'Nav' : ''}>
      <FaTimes className="icon" icon={FaTimes} onClick={toggleNav}/>
      {/* <img src="img/img2.jpg" alt="" title='My Profile Picture' width={150} height={150} /> */}
      <h2 className="pb-4">Brian Njoroge</h2>
      <section id='Navigation' className='Navigation SocialMedia pb-4'>
        <p><a href="https://twitter.com/BrianKingara2"> <FaTwitter /> </a></p>
        <p><a href="https://www.instagram.com/k_.ingb/"> <FaInstagram /> </a></p>
        <p><a href="https://www.linkedin.com/in/brian-king-ara-3bb150277/"> <FaLinkedin /> </a></p>
        <p><a href="https://github.com/kingaranjoroge"> <FaGithub /> </a></p>
        <p><a href="https://web.whatsapp.com/#"> <FaWhatsapp /> </a></p>
      </section>
      <section id="Navigation" className='Navigation'>
        <p><Link to='/' className='flex items-center gap-2 mb-6'> <FaHome /> Home</Link></p>
        <p><Link to='about' className='flex items-center gap-2 mb-6'> <FaUser /> About</Link></p>
        <p><Link to='services' className='flex items-center gap-2 mb-6'> <FaServicestack /> Services</Link></p>
        <p><Link to='portfolio' className='flex items-center gap-2 mb-6'> <FaBriefcase /> Portfolio</Link></p>
        <p><Link to='contact' className='flex items-center gap-2'> <FaAddressBook /> Contact</Link></p>
      </section>
    </nav>
  )
}

export default Nav
