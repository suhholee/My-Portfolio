// Custom Components
import email from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <div className="contact-container">
        <a href='mailto:suhholeemichael@gmail.com'><img src={email} /></a>
        <a href='https://github.com/suhholee'><img src={github} /></a>
        <a href='https://www.linkedin.com/in/suhho-lee/'><img src={linkedin} /></a>
      </div>
    </div>
  )
}

export default Contact