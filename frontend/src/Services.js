import React from 'react'
import { FaLaptopCode, FaCode, FaServer, FaDatabase } from 'react-icons/fa'


const Services = () => {
  return (    
    <article className='Services'>
      <h2 className='PageTitle'>Services</h2>
      <article className="MyServices">
        <section className='Product'>
          <div className="IconDiv">
            <FaLaptopCode className='ServicesIcons' />
            <h3 className="ResponsiveTitle">FrontEnd Development</h3>
          </div>
          <section className="ProductDescription">
            <div className="ServiceTitle">
              <h3>FrontEnd Development</h3>
            </div>
            <p>As a front-end developer, I specialize in creating visually appealing and interactive websites using HTML, CSS, and JavaScript. I have also honed my skills in ReactJS, a popular JavaScript library used for building user interfaces. I strive to create websites that not only look great but also provide a seamless user experience. With my expertise in front-end development, I can help your organization create stunning and functional websites that will leave a lasting impression on your users</p>
          </section>
        </section>               
        <section className='Product'>
          <div className="IconDiv">
            <FaServer className='ServicesIcons' />
            <h3 className="ResponsiveTitle">BackEnd Development</h3>
          </div>
          <section className="ProductDescription">
            <div className="ServiceTitle">
              <h3>BackEnd Development</h3>
            </div>
            <p>As a back-end developer, I specialize in creating the behind-the-scenes functionality of websites and applications using tools such as MongoDB, ExpressJS, and NodeJS. I am currently learning these technologies and have already become proficient in them. I understand the importance of creating efficient, scalable, and secure back-end systems to ensure the smooth functioning of your website or application. With my skills in back-end development, I can help your organization create robust and reliable systems that meet your specific requirements.</p>
          </section>
        </section>
        <section className='Product'>
          <div className="IconDiv">
            <FaDatabase className='ServicesIcons' />
            <h3 className="ResponsiveTitle">Full Stack Development</h3>
          </div>
          <section className="ProductDescription">
            <div className="ServiceTitle">
              <h3>Full Stack Development</h3>
            </div>
            <p>As a full-stack developer, I have a broad range of skills that allow me to create high-quality websites and applications from end to end. On the front-end, I specialize in using HTML, CSS, JavaScript, and ReactJS to create visually appealing and interactive interfaces. On the back-end, I use MongoDB, ExpressJS, and NodeJS to create efficient, scalable, and secure systems that ensure the smooth functioning of your website or application. With my expertise in full-stack development, I can help your organization create robust and reliable websites and applications that provide a seamless user experience.</p>
          </section>
        </section>        
        <section className='Product'>
          <div className="IconDiv">
            <FaCode className='ServicesIcons' />
            <h3 className="ResponsiveTitle">Coding Tasks</h3>
          </div>
          <section className="ProductDescription">
            <div className="ServiceTitle">
              <h3>Coding Tasks</h3>
            </div>
            <p>As a skilled coder, I am passionate about solving complex problems and delivering high-quality code. With my expertise in programming languages like Java, JavaScript, C, and C++  I can tackle any coding task with ease. I am experienced in algorithm design, data structures, and software engineering principles, ensuring that my code is not only functional but also efficient and maintainable. Whether you need help with a small coding task or a larger software project, I am committed to delivering top-notch work that meets your specific requirements. Let me take care of your coding tasks so that you can focus on other important aspects of your business.</p>
          </section>
        </section>        
      </article>
    </article>  
  )
}

export default Services