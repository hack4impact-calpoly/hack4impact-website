import { SocialIcon } from 'react-social-icons';
const footer = {
  backgroundColor: "#64AB8A",
  padding: ".5%",
}

class Footer extends React.Component {
  render() {
    return(
      <footer style={footer}>
              <div className="flex-container">
                <SocialIcon style={{marginRight: 15}} url="https://github.com/hack4impact-calpoly" />
                <SocialIcon style={{margin: 5}} url="https://www.facebook.com/hack4impactcalpoly/" />
                <SocialIcon style={{marginLeft: 15}} url="https://www.instagram.com/hack4impactcalpoly/" />
              </div>
              <div className="flex-container">
                  <img src="./images/H4I_green.png"/>
              </div>
      </footer>
  )
  }
}

export default Footer;