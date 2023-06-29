import { useState } from 'react'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Services from './Services'
// import Portfolio from './Portfolio'
import Contact from './Contact'
import Missing from './Missing'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} toggleNav={toggleNav} />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          {/* <Route path='portfolio' element={<Portfolio />} /> */}
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
