// Custom Components
import fkl from '../images/fkl.gif'
import woozu from '../images/woozu.gif'
import pl from '../images/pl.gif'
import pi from '../images/pi.gif'
import javascript from '../images/javascript.png'
import react from '../images/react.png'
import sass from '../images/sass.png'
import express from '../images/express.png'
import node from '../images/node.webp'
import python from '../images/python.webp'
import django from '../images/django.jpeg'
import postgresql from '../images/postgresql.png'
import mongodb from '../images/mongo.png'
import link from '../images/link.png'
import github from '../images/github.png'
import html from '../images/html.png'
import css from '../images/css.png'

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
        <div className="project-left">
          <div className='content'>
            <h2><a href='https://woozu-sounds.herokuapp.com/'>WOOZU SOUNDS</a></h2>
            <h3>Group Project | One Week</h3>
            <div className="stacks">
              <img src={javascript} />
              <img src={react} />
              <img src={sass} />
              <img src={express} />
              <img src={node} />
              <img src={mongodb} />
            </div>
            <p>WOOZU SOUNDS is an interactive website for users who are attending an imaginary festival named Woozu Sounds. As &ldquo;WOOZU (우주)&rdquo; means &ldquo;UNIVERSE&rdquo; in Korean, the website had a space theme with each entity representing a stage of the festival. My main roles lied with handling complex functionalities, testing, and errors in both front and back-end.</p>
            <div className="links">
              <a href='https://github.com/suhholee/Festival-MERN-Project'><img src={github} className='github' /></a>
              <a href='https://woozu-sounds.herokuapp.com/'><img src={link} className='link' /></a>
            </div>
          </div>
          <div className='image woozu'>
            <img src={woozu} />
            <div className='image-wrapper'></div>
          </div>
        </div>
        <div className="project-right">
          <div className='image pl'>
            <img src={pl} />
            <div className='image-wrapper'></div>
          </div>
          <div className='content'>
            <h2><a href='https://premier-league-react-project.netlify.app/'>Premier League</a></h2>
            <h3>Solo Project | Two Days</h3>
            <div className="stacks">
              <img src={javascript} />
              <img src={react} />
              <img src={sass} />
              <img src={node} />
            </div>
            <p>This website is a React application that consumed a public API that had the most recent information about the 2022-23 Premier League season. This website has a home page, today’s fixtures, results, league table, and players’ statistics.</p>
            <div className="links">
              <a href='https://github.com/suhholee/Premier-League-React-Project'><img src={github} className='github' /></a>
              <a href='https://premier-league-react-project.netlify.app/'><img src={link} className='link' /></a>
            </div>
          </div>
        </div>
        <div className="project-left">
          <div className='content'>
            <h2><a href='https://suhholee.github.io/Space-Invaders/'>PITCH INVADERS!</a></h2>
            <h3>Solo Project | One Week</h3>
            <div className="stacks">
              <img src={javascript} />
              <img src={html} />
              <img src={css} />
            </div>
            <p>My first project was a Premier League themed Space Invaders game using vanilla JavaScript. There are four players that you can choose from and three different levels within the game.</p>
            <div className="links">
              <a href='https://github.com/suhholee/Space-Invaders'><img src={github} className='github' /></a>
              <a href='https://suhholee.github.io/Space-Invaders/'><img src={link} className='link' /></a>
            </div>
          </div>
          <div className='image pi'>
            <img src={pi} />
            <div className='image-wrapper'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects