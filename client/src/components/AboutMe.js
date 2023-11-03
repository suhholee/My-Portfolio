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
import rest from '../images/rest.png'
import postgresql from '../images/postgresql.png'
import vscode from '../images/vscode.png'
import command from '../images/command-line.png'
import git from '../images/git.png'
import github from '../images/github.png'
import insomnia from '../images/insomnia.png'
import tableplus from '../images/tableplus.png'
import heroku from '../images/heroku.png'
import netlify from '../images/netlify.png'
import typescript from '../images/typescript.png'
import mysql from '../images/mysql.png'
import r from '../images/r.png'
import matlab from '../images/matlab.png'

const AboutMe = () => {
  return (
    <div className="about">
      <h1>Who Am I?</h1>
      <div className="content">
        <p className='head'>I strive to find meaningful work that positively influences the lives of others through technology.</p>
        <p>The spark for my current career path derived from my experience as a sport scientist, in which I was able to understand how technology shapes the working environment in every industrial sector and how teamwork is important in building the optimum product.</p>
        <p>These experiences not only served as a foundation of understanding my skills and values, but also allowed me to acknowledge my passion in building innovative products and solutions to impact people’s lives positively. I also believe that my strong teamwork and communication skills were developed through these experiences as I was engaged in an interactive working environment, which enabled me to be adaptable to any given task or situation.</p>
        <p>I currently work as a business development manager at Project WITH, tackling current issues in the sports industry through data analysis, software development, and strategic planning.</p>
        <p>I inspire to be recognised individual in tech who can flexibly utilise the positives of the current norms to create an innovative product that can shape people’s lives in the future.</p>
      </div>
      <h2>🦸‍♂️ My Superpowers are...</h2>
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
          <img src={rest}></img>
          <p>REST Framework</p>
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
          <img src={command}></img>
          <p>Command Line</p>
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
        <div className='icon-single'>
          <img src={heroku}></img>
          <p>Heroku</p>
        </div>
        <div className='icon-single'>
          <img src={netlify}></img>
          <p>Netlify</p>
        </div>
        <div className='icon-single'>
          <img src={typescript}></img>
          <p>TypeScript</p>
        </div>
        <div className='icon-single'>
          <img src={mysql}></img>
          <p>MySQL</p>
        </div>
        <div className='icon-single'>
          <img src={r}></img>
          <p>R</p>
        </div>
        <div className='icon-single'>
          <img src={matlab}></img>
          <p>MATLAB</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe