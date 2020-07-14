import {Col} from "react-bootstrap";
import Image from 'react-bootstrap/Image'



//will be imported in the _app component for all pages
//color: 64AB8A
//needs to be made sticky

const style = {
  backgroundColor: "#64AB8A",
  padding: ".5%",
  position: "sticky"
}

class Footer extends React.Component {
  render() {
    return(
      <footer style={style}>
            <Col>
              <div class = "pt-1" style={{display: 'flex', justifyContent: 'center'}}>
                <div class = "pr-4">
                  <a href="https://github.com/hack4impact-calpoly">
                  <Image src="./images/github.png" width = "30" height = "30"/>
                  </a>
                </div>
                <div class = "pb-1">
                  <a href="https://www.facebook.com/hack4impactcalpoly/">
                  <Image src="./images/fb.png" width = "30" height = "30"/>
                  </a>
                  </div>
                  <div class = "pl-4">
                  <a href="https://www.instagram.com/hack4impactcalpoly/">
                  <Image src="./images/insta.png" width = "30" height = "30"/>
                  </a>
                  </div>
                </div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                  <Image src="./images/H4I_green.png" width = "150" height = "50"/>
                </div>
              </div>
              </Col>
      </footer>
  )
  }
}

export default Footer;