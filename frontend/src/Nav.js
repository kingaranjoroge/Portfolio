import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaHome, FaUser, FaAddressBook, FaServicestack, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const Nav = ({ isNavVisible, toggleNav }) => {

  return (
    <>
      {isNavVisible && <div className="fixed inset-0 bg-black bg-opacity-0 z-40" onClick={toggleNav}></div>}
      <nav id="Nav" className={`fixed z-50 ${isNavVisible ? 'Nav' : ''}`}>
        <FaTimes className="icon" icon={FaTimes} onClick={toggleNav} />
        <h2>Brian Njoroge</h2>
        <section id='Navigation' className='Navigation SocialMedia'>
          <p><a href="https://twitter.com/BrianKingara2"> <FaTwitter /> </a></p>
          <p><a href="https://www.instagram.com/k_.ingb/"> <FaInstagram /> </a></p>
          <p><a href="https://www.linkedin.com/in/brian-king-ara-3bb150277/"> <FaLinkedin /> </a></p>
          <p><a href="https://github.com/kingaranjoroge"> <FaGithub /> </a></p>
          <p><a href="https://web.whatsapp.com/#"> <FaWhatsapp /> </a></p>
        </section>
        <section id="Navigation" className='Navigation'>
          <p><Link to='/' onClick={toggleNav}> <FaHome /> Home</Link></p>
          <p><Link to='about' onClick={toggleNav}> <FaUser /> About</Link></p>
          <p><Link to='services' onClick={toggleNav}> <FaServicestack /> Services</Link></p>
          <p><Link to='contact' onClick={toggleNav}> <FaAddressBook /> Contact</Link></p>
        </section>
      </nav>
    </>
  )
}

export default Nav