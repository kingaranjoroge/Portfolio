import React from 'react'

const Home = () => {
  return (    
    <article className="HomeBackground">
      <section className='Home'>
        <h1 className='text-blue-950'>Brian Njoroge</h1>
        <h3 className='text-xl font-bold'>Full Stack Web Developer</h3>
        <div className='flex flex-col items-center'>
          <h3 className='xs:text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap'>Front End Developer (React.js, Next.js, TailwindCSS)</h3>
          <h3 className='xs:text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap'>Back End Developer (Node.js, Express.js, Nest.js)</h3>
          <h3 className='xs:text-xs sm:text-sm md:text-lg font-medium whitespace-nowrap'>Database (MongoDB)</h3>
        </div>
      </section>
    </article>    
  )
}

export default Home