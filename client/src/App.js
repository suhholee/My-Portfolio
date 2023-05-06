// Custom components
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Header from './components/Header'
import Home from './components/Home'
import Interests from './components/Interests'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='site-wrapper'>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Interests />
      <Contact />
    </div>
  )
}

export default App
