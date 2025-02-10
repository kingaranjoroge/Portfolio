import React from 'react'

const About = () => {
  return (    
    <article className='About'>
      <h2 className='PageTitle text-xl font-bold'>About</h2>
      <p>
        Welcome to my world of web development mastery! As a full-stack web developer, I craft immersive digital experiences using cutting-edge technologies. Harnessing the power of React.js, Next.js, and TailwindCSS, I sculpt dynamic and responsive front-end interfaces that captivate and engage users. 
        <br />
        <br />
        On the backend, I leverage the robust capabilities of Node.js, Express.js, and Nest.js to architect scalable and efficient systems that power my applications. With MongoDB as my database of choice, coupled with the flexibility of Mongoose as the ORM, I seamlessly manage data with precision and speed.
        <br />
        <br />
        Every project I undertake is infused with creativity, functionality, and a relentless pursuit of excellence. Let's collaborate to bring your vision to life and elevate your digital presence to new heights.
      </p>
      <img src="" alt="" />
      <h3 className='font-semibold pt-2'>Full Stack Web Developer, JavaScript Developer, TypeScript Developer</h3>
      <section className="PersonalInfo pt-2">
        <ul>
          <li><strong>Name:</strong> Brian Njoroge</li>
          <li><strong>Website:</strong> <a href="https://kingaranjoroge.netlify.app/">kingaranjoroge.netlify.app</a></li>
          <li><strong>Phone:</strong> 0703371828</li>
          <li><strong>Email:</strong> briankingara4@gmail.com</li>       
        </ul>
        <ul>
          <li><strong>City:</strong> Nairobi, Kenya</li>
          <li><strong>Github:</strong> <a href="https://github.com/kingaranjoroge">github.com/kingaranjoroge</a></li>
          <li><strong>Degree:</strong> Bsc. Applied Computer Science</li>
          <li><strong>Freelance:</strong> Available</li>
        </ul>
      </section>
      <h2 className='PageTitle Skills text-lg font-bold'>Skills</h2>
      <section className='SkillsBar'>        
        <div className='Bar'>
          <div className='Info'><span>HTML</span></div>
          <div className='ProgressLine html '><span></span></div>
        </div>
        <div className='Bar'>
          <div className='Info'><span>CSS</span></div>
          <div className='ProgressLine css'><span></span></div>
        </div>
        <div className='Bar'>
          <div className='Info'><span>JAVASCRIPT</span></div>
          <div className='ProgressLine javascript'><span></span></div>
        </div>
        <div className='Bar'>
          <div className='Info'><span>MONGODB</span></div>
          <div className='ProgressLine mongodb'><span></span></div>
        </div>
        <div className='Bar'>
          <div className='Info'><span>EXPRESSJS</span></div>
          <div className='ProgressLine expressjs'><span></span></div>
        </div>
        <div className='Bar'>
          <div className='Info'><span>REACTJS</span></div>
          <div className='ProgressLine reactjs'><span></span></div>
        </div>
        <div className='Bar'>
          <div className='Info'><span>NODEJS</span></div>
          <div className='ProgressLine nodejs'><span></span></div>
        </div>
      </section>
    </article>    
  )
}

export default About