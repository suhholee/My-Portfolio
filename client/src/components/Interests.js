// Custom components
import sports from '../images/sports.png'
import movies from '../images/movies.png'
import travel from '../images/travel.png'

const Interests = () => {
  return (
    <div className="interests">
      <h1>I like to...</h1>
      <div className="interests-container">
        <div className="interest">
          <img src={sports} />
          <p>I love sports because I believe it is the best medium that brings people together. I play football, baseball, basketball, tennis, badminton and more (recently into golf). I am also into Fantasy Premier League (allowing me to create a K- League version of it).</p>
        </div>
        <div className="interest">
          <img src={movies} />
          <p>Movies for me are the way I escape from reality and jump into a world of creativity. I love all different kinds of movies from big franchises to genre films and thrillers.</p>
        </div>
        <div className="interest">
          <img src={travel} />
          <p>I enjoy traveling to various countries and meeting new people there. I have been to Korea, Japan, Australia, United Kingdom, United States, Canada, Mexico, Russia, Spain, Ireland, Sweden, Finland, France, and Italy.</p>
        </div>
      </div>
    </div>
  )
}

export default Interests