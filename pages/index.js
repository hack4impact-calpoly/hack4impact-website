import {Button, Card, Container, Row, Col} from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import logo from '../public/images/H4i_square_small.png';
import Slideshow from "../components/Slideshow.js";
import Slider from "react-slick";

const pictures = [
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
  }
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

  renderTestimonials(){
    let pictureCards = pictures.map((content) => {
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
                  <Button variant="outline">Learn More</Button>
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
                      <h3 style={{ marginBottom:30 }}>Who We Are</h3>
                    </Col>
                </Row>
              </Container>
              {this.renderTestimonials()}
              <Button variant="solid" style={{marginTop: '2em'}} href="/about-us">Get to know us</Button>
            </Card.Body>
            
        </Card>
        <Card style={{ marginBottom: '4em', alignItems: 'center'}}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center'}}>Our Projects</Card.Title>
              <Button variant="solid" href="/students">Tester Link S</Button>
              <Button variant="outline">Tester Outline</Button>
              <Button variant="solid" size="xs">Tester small</Button>
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