// Custom Components
import email from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <div className="contact-container">
        <a href='mailto:suhholee912@gmail.com' target='_blank' rel='noopener noreferrer'><img src={email} /></a>
        <a href='https://github.com/suhholee' target='_blank' rel='noopener noreferrer'><img src={github} /></a>
        <a href='https://www.linkedin.com/in/suhho-lee/' target='_blank' rel='noopener noreferrer'><img src={linkedin} /></a>
      </div>
    </div>
  )
}

export default Contact