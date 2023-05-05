
// Custom Components
import fkl from '../images/fkl.gif'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import sass from '../images/sass.png'
import express from '../images/express.png'
import node from '../images/node.webp'
import python from '../images/python.webp'
import django from '../images/django.jpeg'
import postgresql from '../images/postgresql.png'
import link from '../images/link.png'
import github from '../images/github.png'

const Projects = () => {
  return (
    <div className="projects">
      <h1>Things I&#39;ve Built</h1>
      <div className="projects-container">
        <div className="project-right">
          <div className='image'>
            <img src={fkl} />
            <div className='image-wrapper'></div>
          </div>
          <div className='content'>
            <h2><a href='https://fantasy-k-league.herokuapp.com/'>Fantasy K-League</a></h2>
            <h3>Solo Project | One Week</h3>
            <div className="stacks">
              <img src={javascript} />
              <img src={react} />
              <img src={sass} />
              <img src={express} />
              <img src={node} />
              <img src={python} />
              <img src={django} />
              <img src={postgresql} />
            </div>
            <p>A Korean league &#40;K-League&#41; version of Fantasy Football. The game is based on the rules of <a href='https://fantasy.premierleague.com/help/rules'>Fantasy Premier League</a>, allowing users to register, select their own team, login, view their team, view their world rankings, and gain current information about the players using CRUD functionality. The project is on-going.</p>
            <div className="links">
              <a href='https://github.com/suhholee/Fantasy-K-League'><img src={github} className='github' /></a>
              <a href='https://fantasy-k-league.herokuapp.com/'><img src={link} className='link' /></a>
            </div>
          </div>
        </div>
        <div className="project">
          <h2>WOOZU SOUNDS</h2>
        </div>
        <div className="project-right">
          <h2>The 2022-23 Premier League</h2>
        </div>
        <div className="project">
          <h2>PITCH INVADERS!</h2>
        </div>
      </div>
    </div>
  )
}

export default Projects