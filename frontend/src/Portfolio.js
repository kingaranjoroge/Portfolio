import React from 'react'
import Carousel from './components/Carousel'

import project1Image1 from './img/buntu/buntu-1.png'
import project1Image2 from './img/buntu/buntu-2.png' 
import project1Image3 from './img/buntu/buntu-3.png'
import project1Image4 from './img/buntu/buntu-4.png' 
import project1Image5 from './img/buntu/buntu-5.png'

import project2Image1 from './img/fetchfast/fetchfast-1.png'
import project2Image2 from './img/fetchfast/fetchfast-2.png'
import project2Image3 from './img/fetchfast/fetchfast-3.png'
import project2Image4 from './img/fetchfast/fetchfast-4.png'
import project2Image5 from './img/fetchfast/fetchfast-5.png'

import project3Image1 from './img/internconnect/internconnect-1.png'
import project3Image2 from './img/internconnect/internconnect-2.png'
import project3Image3 from './img/internconnect/internconnect-3.png'
import project3Image4 from './img/internconnect/internconnect-4.png'
import project3Image5 from './img/internconnect/internconnect-5.png'
 

const Portfolio = () => {
  const buntuSlides = [
    project1Image1,
    project1Image2,
    project1Image3,
    project1Image4,
    project1Image5
  ];

  const fetchfastSlides = [
    project2Image1,
    project2Image2,
    project2Image3,
    project2Image4,
    project2Image5
  ];

  const internconnectSlides = [
    project3Image1,
    project3Image2,
    project3Image3,
    project3Image4,
    project3Image5
  ];

  return (    
    <article className='Portfolio'>
      <h2 className='PageTitle text-xl font-bold text mb-8'>Portfolio</h2>
      <section className='MyPortfolio flex flex-col gap-20 mb-20'>
        <Carousel 
          slides={buntuSlides} 
          height="400px" 
          title={'Buntu - Social Networking Platform'}
          projectUrl="https://buntu-network.vercel.app/"
          description="A social networking platform built with the MERN stack. Features include user authentication, real-time messaging, post creation, likes, comments, and profile management."
        />
        <Carousel 
          slides={fetchfastSlides} 
          height="400px" 
          title={'FetchFast - Online Restaurant Ordering & Management System'} 
          projectUrl="https://fetchfast.vercel.app/"
          description="A comprehensive restaurant management system featuring online ordering, menu management, order tracking, and payment integration. Built with React, Node.js, and MongoDB."
        />
        <Carousel 
          slides={internconnectSlides} 
          height="400px" 
          title={'InternConnect - Internships Search Platform'} 
          projectUrl="https://internkonnekt.netlify.app/"
          description="A platform connecting students with internship opportunities. Features include job posting, application tracking, and profile management. Built using React and Express.js."
        />
      </section>
    </article>    
  )
}

export default Portfolio