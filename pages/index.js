import {Button, Card, Container, Row, Col} from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Slideshow from "../components/Slideshow.js";
import logo from '../public/images/H4i_square_small.png';
import {CardMosaic} from "../components/CardMosaic.js";
import HomePageProjects from "../components/HomePageProjects.js";
import HomePageOpportunities from "../components/HomePageOpportunities.js";

import Slider from "react-slick";

const slides = [
  {
    image: "./images/spring2019hike.png"
  },
  {
    image: "./images/saraford.png"
  },
  {
    image: "./images/2018group.png"
  },
  {
    image: "./images/ericIvonne.png"
  },
  {
    image: "./images/selfie.png"
  },
  {
    image: "./images/hill.png"
  },
]


const homePageProjects = [
  {
      projectName: 'ECOSLO - Environmental Center of San Luis Obispo',
      cardTitlePicture: "./images/ecoslo-project/ecoslo-card-tile.jpg",
      date:"2019-2020 Project",
      productDescription:"A web application that allows ECOSLO to record beach cleanup information and fully manage years worth of data easily to spread public awareness and gain funding.",
      },
  {
      projectName: 'CPCP - Cal Poly Cat Program',
      cardTitlePicture: "./images/cpcp-project/cpcp-card-tile.jpg",
      date:"2019-2020 Project",
      productDescription:"A web and mobile app to allow the Cal Poly Cat Program to easily keep track of their cats, documents, and upcoming events, which were previously stored in an excel sheet."
    },
  {
      projectName: 'SLO Botanical Gardens',
      cardTitlePicture: "./images/slobg-project/slobg-card-tile.jpg",
      date:"2019-2020 Project",
      productDescription:"A Volunteer Management System that allows nonprofit supervisors to record details about their participants in order to track their hours, export volunteer information, and receive funding."
  }
]

const homePageOpportunities = [
  {
      name: 'Students',
      description:"We pride ourselves on being an interdisciplinary organization and accept individuals from all majors and years. Whether you're interested in being a software developer, product manager, or designer, we want to hear from you.",
      image: '../images/students.png',
      buttonText: "I'm a student"
    },
  {
      name: 'Nonprofits',
      description:"We do our best in seeking out nonprofit organizations that need help in San Luis Obispo and the surrounding areas. If your nonprofit has a project idea or could use a little help, please reach out!",
      image: '../images/plant.png',
      buttonText: "I'm a Nonprofit"
    }
]

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000
};

class Home extends React.Component {

  renderProjectInfo() {
    let projectCards = homePageProjects.map((content) => {
        return <HomePageProjects name={content.projectName} picture={content.cardTitlePicture}
        date={content.date} description={content.productDescription}/>
    });

    return (
      <>
        <CardMosaic width={3}>
          {projectCards}
        </CardMosaic>
      </>
    );
  }

  renderOpportunities() {
    let opportunityCards = homePageOpportunities.map((content) => {
        return <HomePageOpportunities name={content.name} picture={content.image}
        description={content.description} buttonText={content.buttonText}/>
    });

    return (
      <>
        <CardMosaic width={3}>
          {opportunityCards}
        </CardMosaic>
      </>
    );
  }


  renderSlides(){
    let pictureCards = slides.map((content) => {
      return <Slideshow image={content.image}/>
    });
    return (
      <Container>
        <div>
          <Slider {...settings} style={{marginBottom:20}}>
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
        <div style={{marginTop: '4em', marginBottom: '6em', alignContent: 'center', color: 'white'}}>
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
                  <Button variant="outline" href='https://mailchi.mp/7f64492b7fb4/subscribe' target="_blank">Newsletter</Button>
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
                    {this.renderProjectInfo()}
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
                  {this.renderOpportunities()}
                </Row>
                
              </Card.Body>
        </Card>
        






        
      </div>
    )
  }
}

export default Home;
