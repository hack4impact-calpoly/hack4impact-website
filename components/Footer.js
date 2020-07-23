import { SocialIcon } from 'react-social-icons';
const footer = {
  backgroundColor: "#64AB8A",
  padding: ".5%",
}
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

class Footer extends React.Component {
  render() {
    return(
      <footer style={{backgroundColor:"#64AB8A", minHeight: 200, paddingTop:40, paddingBottom:20}}>
      <Container>
        <Row>
          <Col md="4">
            <div>
              <img src="/images/H4I_green.png" height="70" width="auto" style={{marginBottom:20}}/>
            </div>
            <div style={{marginBottom:20}}>
                 <SocialIcon style={{marginLeft:10, marginRight: 15}} url="https://github.com/hack4impact-calpoly" />
                 <SocialIcon style={{margin: 5}} url="https://www.facebook.com/hack4impactcalpoly/" />
                 <SocialIcon style={{marginLeft: 15}} url="https://www.instagram.com/hack4impactcalpoly/" />
               </div>
               <p>
              Please contact <a href="mailto:calpoly@hack4impact.org">calpoly@hack4impact.org</a> with questions.
            </p>
          </Col>
          <div className="col-md-1"/>
          <div className="col-md-2" style={{marginTop:10, marginRight:40}}>
            <h1>Quick Links</h1>
                <Link href='/about-us'>
                  <a>About Us</a>
                </Link>
              <div>
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </div>
          </div>
          <div className="col-md-2" style={{marginTop:10}}>
            <h1>Apply</h1>
              <div>
                <Link href="/students">
                  <a>Students</a>
                </Link>
              </div>
              <div>
                <Link href="/nonprofits">
                  <a>Nonprofits</a>
                </Link>
              </div>
          </div>
          <div className="col-md-2" style={{marginTop:10}}>
            <h1>Donate</h1>
              <div>
                <Link href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=623">
                  <a>Donation Link</a>
                </Link>
              </div>
              <div>
                <Link href="mailto:calpoly@hack4impact.org">
                  <a>Email</a>
                </Link>
              </div>
          </div>
        </Row>
      </Container>
      <style jsx>{`
        h1 {
          font-size: 25px;
          color: white;
          padding-bottom: 15px;
        }
        a {
          font-size: 18px;
          color: #3A7ABA;
        }
        a:hover {
          color: #9AC3DC;
        }
      `}</style>
    </footer>
  )
  }
}




export default Footer;