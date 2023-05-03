
// Custom components
import profile from '../images/profile.png'

const Home = () => {

  return (
    <div className="home">
      <div className='text'>
        <h1>Suhho Lee</h1>
        <div className='sub-text'>
          <h2 className='typing'>Software Engineer</h2>
        </div>
      </div>
      <div className="profile">
        <img src={profile} className='profile-image'></img>
      </div>
    </div>
  )
}

export default Home