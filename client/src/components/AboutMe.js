// Custom Components
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import sass from '../images/sass.png'
import express from '../images/express.png'
import node from '../images/node.webp'
import mongo from '../images/mongo.png'
import python from '../images/python.webp'
import django from '../images/django.jpeg'
import postgresql from '../images/postgresql.png'
import vscode from '../images/vscode.png'
import git from '../images/git.png'
import github from '../images/github.png'
import insomnia from '../images/insomnia.png'
import tableplus from '../images/tableplus.png'

const AboutMe = () => {
  return (
    <div className="about">
      <h1>Who Am I?</h1>
      <div className="content">
        <p>I am a former sport science graduate and a current junior software engineer who strives to find meaningful work that positively influences the lives of others through technology.</p>
        <p>The spark for a career change derived from my experience as a sport scientist at Oxford United FC, where I was able to understand that technology can shape how people work effectively in every industrial sector. My following role as a sport science and product team intern at QMIT gave me firsthand experience in how a product is developed in a tech company and how much teamwork is important in building the optimum product.</p>
        <p>These experiences not only served as a foundation of understanding my skills and values, but also allowed me to acknowledge my passion in building innovative products and solutions to impact people’s lives positively.</p>
        <p>Therefore, I decided to enroll in General Assembly’s Software Engineer Immersive which helped me gain strong knowledge in coding and a unique portfolio to officially pursue a career as a software engineer.</p>
        <p>I inspire to be recognised individual in tech who can flexibly utilise the positives of the current norms to create an innovative product that can shape people’s lives in the future. At this stage of my career, I am looking to enhance my skills and further gain experience as a full-stack developer in a creative and collaborative team.</p>
      </div>
      <div className="icons">
        <div className='icon-single'>
          <img src={javascript}></img>
          <p>JavaScript</p>
        </div>
        <div className='icon-single'>
          <img src={html}></img>
          <p>HTML</p>
        </div>
        <div className='icon-single'>
          <img src={css}></img>
          <p>CSS</p>
        </div>
        <div className='icon-single'>
          <img src={sass}></img>
          <p>SASS</p>
        </div>
        <div className='icon-single'>
          <img src={react}></img>
          <p>React</p>
        </div>
        <div className='icon-single'>
          <img src={express}></img>
          <p>Express</p>
        </div>
        <div className='icon-single'>
          <img src={node}></img>
          <p>Node.js</p>
        </div>
        <div className='icon-single'>
          <img src={mongo}></img>
          <p>MongoDB</p>
        </div>
        <div className='icon-single'>
          <img src={python}></img>
          <p>Python</p>
        </div>
        <div className='icon-single'>
          <img src={django}></img>
          <p>Django</p>
        </div>
        <div className='icon-single'>
          <img src={postgresql}></img>
          <p>PostgreSQL</p>
        </div>
        <div className='icon-single'>
          <img src={vscode}></img>
          <p>VS Code</p>
        </div>
        <div className='icon-single'>
          <img src={git}></img>
          <p>Git</p>
        </div>
        <div className='icon-single'>
          <img src={github}></img>
          <p>GitHub</p>
        </div>
        <div className='icon-single'>
          <img src={insomnia}></img>
          <p>Insomnia</p>
        </div>
        <div className='icon-single'>
          <img src={tableplus}></img>
          <p>TablePlus</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe