import avatar from '../images/avatar.jpg'
import twitch from '../images/twitch.png'
import steam from '../images/steam.png'
import upcoming from '../images/upcoming.png'
import controller from '../images/controller.png'

const Dashboard = () => {
    return (
        <div className="dashboard">
          <div className="user">
            <img src={avatar} width="100" height="100" alt="" />
            <h3>SplashhBR</h3>
            <p>Pro Member</p>
          </div>
          <div className="links">
            <div className="link">
              <img src={twitch} alt="" />
              <h2 onClick={()=> {
                window.open('https://www.twitch.tv/splashhbr')
              }}>Streams</h2>
            </div>
            <div className="link">
              <img src={steam} alt="" />
              <h2 onClick={()=> {
                window.open('https://store.steampowered.com/')
              }}>Games</h2>
            </div>
            <div className="link">
              <img src={upcoming} alt="" />
              <h2>New</h2>
            </div>
          </div>
          <div className="pro">
            <h2>Join pro for free games.</h2>
            <img src={controller} alt="" />
          </div>
        </div>
    )
}

export default Dashboard
