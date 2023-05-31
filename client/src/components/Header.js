import { useState } from 'react'
import { Link } from 'react-scroll'

const Header = () => {

  // ! States
  const [isOpen, setIsOpen] = useState(false)

  // ! Executions
  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='header'>
      <button className='menu-toggle' onClick={handleMenuClick}>
        &#9776;
      </button>
      <nav className='desktop-nav'>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Who Am I?
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experiences"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experiences & Education
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="interests"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Interests
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={isOpen ? 'mobile-nav open' : 'mobile-nav closed'}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Who Am I?
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experiences"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experiences & Education
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="interests"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Interests
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header