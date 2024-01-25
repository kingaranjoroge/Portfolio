import React from 'react'

const About = () => {
  return (    
    <article className='About'>
      <h2 className='PageTitle'>About</h2>
      <p>
        As a computer science graduate, I have been exposed to a variety of programming languages such as C, C++, Java, and JavaScript. However, my passion lies in JavaScript and I have become quite skilled in this language. I am also proficient in HTML and CSS, which makes me a well-rounded web developer. I am well versed in MERN Stack technologies (MongoDB, ExpressJS, ReactJS, NodeJS) which are used together to create powerful web applications. I enjoy staying up-to-date with new technologies. I love developing websites. With my skills in programming, website development, and my ability to quickly learn new technologies, I am a great candidate for any freelance project you have in your mind!
      </p>
      <img src="" alt="" />
      <h3>Web Developer, MERN Stack Developer, JavaScript Developer</h3>
      <section className="PersonalInfo">
        <ul>
          <li><strong>Name:</strong> Brian Njoroge</li>
          <li><strong>Website:</strong> <a href="https://kingaranjoroge.netlify.app/">kingaranjoroge.netlify.app</a></li>
          <li><strong>Phone:</strong> 0703371828</li>
          <li><strong>Email:</strong> briankingara4@gmail.com</li>       
        </ul>
        <ul>
          <li><strong>City:</strong> Nairobi, Kenya</li>
          <li><strong>Github:</strong> <a href="https://github.com/kingaranjoroge">github.com/kingaranjoroge</a></li>
          <li><strong>Degree:</strong> Bsc.Computer Science</li>
          <li><strong>Freelance:</strong> Available</li>
        </ul>
      </section>
      <h2 className='PageTitle Skills'>Skills</h2>
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