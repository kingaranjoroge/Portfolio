import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Layout = ({isNavVisible, setIsNavVisible, toggleNav}) => {

  return (
    <div className="Layout">
      <div id="Nav" className={isNavVisible ? 'Nav' : ''}>
        <Nav isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} toggleNav={toggleNav} />
      </div>
      <div className="Main">
        <div className="Outlet">
          <div className="FixedIcon">
            <FontAwesomeIcon className="icon" icon={faBars} onClick={toggleNav} />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout