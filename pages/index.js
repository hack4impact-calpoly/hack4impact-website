import {Button, Card, Container, Row, Col} from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Slideshow from "../components/Slideshow.js";
import logo from '../public/images/H4i_square_small.png';
import ecoslo from '../public/images/ecoslo-project/ecoslo-card-tile.jpg';
import cpcp from '../public/images/cpcp-project/cpcp-card-tile.jpg';
import slobg from '../public/images/slobg-project/slobg-card-tile.jpg';


import Slider from "react-slick";

const slides = [
  {
    image: "./images/garden.jpg"
  },
  
  {
    image: "./images/saraford.jpg"
  },
  {
    image: "./images/spring2019hike.jpg"
  },
  {
    image: "./images/banquet.jpg"
  },
  {
    image: "./images/spring1.JPG"
  },
  {
    image: "./images/fall2018GroupPic.JPG"
  },
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

class Home extends React.Component {

  renderSlides(){
    let pictureCards = slides.map((content) => {
      return <Slideshow image={content.image}/>
    });
    return (
      <Container>
        <div>
          <Slider {...settings} style={{marginBottom:20}}>
            {/* Fill in testimonials here */}
            <div>
              {pictureCards[0]}
            </div>
            <div>
              {pictureCards[1]}
            </div>
            <div>
              {pictureCards[2]}
            </div>
            <div>
              {pictureCards[3]}
            </div>
            <div>
              {pictureCards[4]}
            </div>
            <div>
              {pictureCards[5]}
            </div>
          </Slider>
        </div>
      </Container>
    );
  }

  render() {
    return (
      <div>
          {/* CODE HERE */}
        <Head>
          <title>Hack4Impact Cal Poly</title>
        </Head>
        <div style={{marginTop: '6em', marginBottom: '6em', alignContent: 'center', color: 'white'}}>
          <Container>
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: 'center' }}>
                  <Col sm={12} md={8} lg={6} xl={6}>
                    <img src={logo} style={{width: '20em', color: 'white'}}/>
                  </Col>
                  <Col sm={12} md={8} lg={6} xl={6}>
                  <h1 style={{color: 'white', textAlign: 'left', alignText: 'left'}}>Hack4Impact Cal Poly</h1>
                  <p style={{color: 'white', textAlign: 'left', alignText: 'left'}}>We are a student organization that empowers engineers, designers, activists, and humanitarians to create lasting and impactful social change. We foster the wider adoption of software as a tool for social good.</p>
                  <Row>
                  <Button variant="outline" href='/about-us'>Learn More</Button>
                  <Button variant="outline">Newsletter</Button>
                  </Row>
                  </Col>
              </Row>
          </Container>
        </div>
        <Card style={{marginBottom:30, textAlign: 'center'}}>
            <Card.Body>
              <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h3 style={{ marginBottom:'1em' }}>Who We Are</h3>
                    </Col>
                </Row>
              </Container>
              {this.renderSlides()}
              <Button variant="solid" style={{marginTop: '2em'}} href="/about-us">Get to know us</Button>
            </Card.Body>
            
        </Card>
        <Card style={{ marginTop: '4em',marginBottom: '4em',alignItems: 'center',textAlign: 'center'}}>
            <Card.Body>
            <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h3 style={{ marginBottom:'1em' }}>Our Projects</h3>
                    </Col>
                </Row>
              </Container>
                <Row>
                  <Col>
                    <Card style={{ width: 'auto', background: '#f4f4f4' }}>
                      <img src={ecoslo} style={{width: '100%'}}/>
                      <Card.Body>
                        <Card.Title>ECOSLO - Environmental Center of San Luis Obispo</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">2019-2020 Project</Card.Subtitle>
                        <Card.Text>
                        A web application that allows ECOSLO 
                        to record beach cleanup information, fully manage and 
                        utilize years worth of data easily to spread public 
                        awareness and gain funding.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: 'auto', background: '#f4f4f4' }}>
                        <img src={cpcp} style={{width: '100%'}}/>
                        <Card.Body>
                          <Card.Title>CPCP - Cal Poly Cat Program</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">2019-2020 Project</Card.Subtitle>
                          <Card.Text>
                          Cal Poly Cat Program Cal Poly Cat Program
                          Cal Poly Cat Program Cal Poly Cat Program
                          Cal Poly Cat Program Cal Poly Cat Program
                          Cal Poly Cat Program Cal Poly Cat Program
                          </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: 'auto', background: '#f4f4f4' }}>
                          <img src={slobg} style={{width: '100%'}}/>
                          <Card.Body>
                            <Card.Title>San Luis Obispo Botanical Garden</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">2019-2020 Project</Card.Subtitle>
                            <Card.Text>
                            A Volunteer Management System 
                            that allows nonprofit supervisors to track
                            important information about each volunteer, in order to
                            track their hours, export volunteer information, and receive
                            funding.
                            </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                </Row>
                <Button style={{marginTop: '1em'}} variant="solid" href="/projects">Learn More</Button>
                
              </Card.Body>
        </Card>

        <Card style={{ marginTop: '4em',marginBottom: '4em',alignItems: 'center',textAlign: 'center'}}>
            <Card.Body>
            <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h3 style={{ marginBottom:'1em' }}>Opportunities</h3>
                    </Col>
                </Row>
              </Container>
                <Row>
                  <Col>
                    <Card style={{ width: 'auto', background: '#f4f4f4' }}>
                        <img src={slodoco} style={{width: '100%'}}/>
                        <Card.Body>
                          <Card.Text>
                          We pride ourselves on being an interdisciplinary organization
                          and accept individuals from all majors and years. Whether you're interested in
                          being a software developer, product manager, or designer, we want to hear
                          from you.
                          </Card.Text>
                          <Button style={{marginTop: '1em'}} variant="solid" href="/students">I'm a student</Button>

                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: 'auto', background: '#f4f4f4' }}>
                          <img src={slobg} style={{width: '100%'}}/>
                          <Card.Body>
                            
                            <Card.Text>
                            We try to do our best in seeking out nonprofit organizations that need help
                            in San Luis Obispo and the surrounding areas. If your nonprofit has a project 
                            idea or could use a little help, please reach out! 
                            </Card.Text>
                            <Button style={{marginTop: '1em'}} variant="solid" href="/students">I'm a nonprofit</Button>
                          </Card.Body>
                      </Card>
                  </Col>
                </Row>
                
              </Card.Body>
        </Card>
        <Card style={{ }}>
          <Card.Body>
            <Card.Title>Opportunities</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              ........Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>



<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>


        
      </div>
    )
  }
}

export default Home;