import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await axios.post('http://localhost:3500/email', { name, email, subject, message });
      // toast.success('Email sent successfully.');

      await axios.post('http://localhost:3500/users', { name, email, subject, message });

      // Clear the form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error(error)
      toast.error('Failed to send email.');
    }
  };

  return (
    <article className='Contact'>
      <h2 className='PageTitle Contact'>Contact</h2>
      <article className='MyContact'>
        <ul className='ContactDetails One'>
          <li>
            <strong>Location:</strong>
            <br />
            Nairobi, Kasarani
          </li>
          <li>
            <strong>Email:</strong>
            <br />
            briankingara4@gmail.com
          </li>
          <li>
            <strong>Call:</strong>
            <br />
            0703371828
          </li>
        </ul>
        <section className='ContactDetails Two'>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor='name'>Your Name<br /></label>
              <input
                className='Input'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor='email'>Your Email<br /></label>
              <input
                className='Input'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor='subject'>Subject<br /></label>
              <input
                className='Input'
                type='text'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor='message'>Message<br /></label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </p>
            <button type='submit'>Send Message</button>
          </form>
        </section>
      </article>
      <ToastContainer /> {/* Add ToastContainer component */}
    </article>
  );
};

export default Contact;
