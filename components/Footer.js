import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

class Footer extends React.Component {
  render() {
    return(
      <footer style={{backgroundColor:"#64ab8a", minHeight: 200, paddingTop:40, paddingBottom:20}}>
      <Container>
        <Row>
          <Col md="4">
            <div>
              <img src="/images/H4I_white.png" height="70" width="auto" style={{marginBottom:20}}/>
            </div>
            <div style={{marginBottom:20}}>
                 <SocialIcon target="_blank" style={{marginLeft:10, marginRight: 15}} url="https://github.com/hack4impact-calpoly" />
                 <SocialIcon target="_blank" style={{margin: 5}} url="https://www.facebook.com/hack4impactcalpoly/" />
                 <SocialIcon target="_blank" style={{marginLeft: 15}} url="https://www.instagram.com/hack4impactcalpoly/" />
               </div>
               <div className="text-label">
              If you have any questions, please contact <a className="footer-link" href="mailto:calpoly@hack4impact.org">calpoly@hack4impact.org</a>.
            </div>
          </Col>
          <div className="col-md-1"/>
          <div className="col-md-2" style={{marginTop:10, marginRight:40}}>
            <div className="footer-label">Quick Links</div>
                <Link href='/about-us'>
                  <a className="footer-link">About Us</a>
                </Link>
              <div>
                <Link href="/projects">
                  <a className="footer-link">Projects</a>
                </Link>
              </div>
              <div>
                <Link href="/contact-us">
                  <a className="footer-link">Contact Us</a>
                </Link>
              </div>
          </div>
          <div className="col-md-2" style={{marginTop:10}}>
            <div className="footer-label">Apply</div>
              <div>
                <Link href="/students">
                  <a className="footer-link">Students</a>
                </Link>
              </div>
              <div>
                <Link href="/nonprofits">
                  <a className="footer-link">Nonprofits</a>
                </Link>
              </div>
          </div>
          <div className="col-md-2" style={{marginTop:10}}>
            <div className="footer-label">Support</div>
              <div>
                <a className="footer-link"target="_blank" href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=623">Donate</a>
              </div>
              <div>
                  <a target="_blank" href="../sponsorship/sponsorship.pdf" className="footer-link">Sponsor</a>
              </div>
              <div>
                <Link href="mailto:calpoly@hack4impact.org">
                  <a className="footer-link">Email</a>
                </Link>
              </div>

          </div>
        </Row>
      </Container>
    </footer>
  )
  }
}




export default Footer;