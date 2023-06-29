import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (    
    <article className='Portfolio'>
      <h2 className='PageTitle'>Portfolio</h2>
      <section className='MyPortfolio'>
        <p><Link to=''><img src="" alt="" /></Link>Project 1</p>
        <p><Link to=''><img src="" alt="" /></Link>Project 2</p>
        <p><Link to=''><img src="" alt="" /></Link>Project 3</p>
      </section>
    </article>    
  )
}

export default Portfolio