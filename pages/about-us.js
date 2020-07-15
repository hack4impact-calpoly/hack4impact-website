import {Card} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";
import DirectorCards from "../components/DirectorCards.js";
import Testimonials from "../components/Testimonials.js";

const teamInfo = [
  {
    name: 'Eric Newcomer',
    position: 'Co Executive Director',
    backgroundImage: "./images/directors/eric.png",
    linkedIn: "https://www.linkedin.com/in/eric-newcomer/"
  },
  {
    name: 'Elena Fowler',
    position: 'Co Executive Director',
    backgroundImage: "./images/directors/elena.png",
    linkedIn: 'https://www.linkedin.com/in/elena-fowler/'
  },
  {
    name: 'Ethan Zimbelman',
    position: 'Director of Technology',
    backgroundImage: "./images/directors/ethan.png",
    linkedIn: "https://www.linkedin.com/in/ethan-zimbelman/"
  },
  {
    name: 'Tim Kim',
    position: 'Director of Outreach',
    backgroundImage: "./images/directors/tim.png",
    linkedIn: 'https://www.linkedin.com/in/timothy-kim-a56929168/'
  },
  {
    name: 'Jillian Quinn',
    position: 'Director of PR',
    backgroundImage: "./images/directors/jillian.png",
    linkedIn: "https://www.linkedin.com/in/jillian-quinn/"
  },
  {
    name: 'Finlay Piroth',
    position: 'Director of Operations',
    backgroundImage: "./images/directors/fin.png",
    linkedIn: 'https://www.linkedin.com/in/finlay-piroth/'
  },
  {
    name: 'Anna Reid',
    position: 'Director of Finance',
    backgroundImage: "./images/directors/anna.png",
    linkedIn: "https://www.linkedin.com/in/anna-reid/"
  }
]

const testimonials = [
  {
    name: "Anna Reid",
    classOf: "Class of 2023",
    quote: "“Hack4Impact has taught me way more than I ever could have imagined. I joined this club knowing close to nothing and I’ve learned so much! It has been one of the highlights of my first year at Cal Poly and I can’t wait to be a part of the future of this club!”",
    image: "./images/directors/anna.png"
  }
]


class AboutUs extends React.Component {

    renderDirectorInfo() {
      let directorCards = teamInfo.map((content) => {
          return <DirectorCards name={content.name} position={content.position}
          backgroundImage={content.backgroundImage} linkedIn={content.linkedIn}/>
      });
      let rowGroups = [];
      while(directorCards.length){
        rowGroups.push(directorCards.splice(0, 3));
      }
      let rows = rowGroups.map((cardRowArray, index) => {
        return(
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Col>
              {cardRowArray[0]}
              </Col>
              <Col>
              {cardRowArray[1]}
              </Col>
              <Col>
              {cardRowArray[2]}
              </Col>
          </Row>
        );
      })
        return (
          <Container>
              {rows}
          </Container>
      );
    }

    renderTestimonials(){
      let testimonial = testimonials.map((content) => {
        return <Testimonials name={content.name} classOf={content.classOf}
        quote={content.quote} image={content.image}/>
    });
        return (
          <Container>
              {testimonial}
          </Container>
      );
    }

  render() {
    return (
      <div>
        <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center', color: 'white'}} >
        <h1 style={{color: 'white', alignSelf: 'center'}}>A bit about us</h1>
        <div style={{margin: '20px'}}/>
        <Container>
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col sm={12} md={8} lg={6} xl={6}>
                Hack4Impact is a 501 (c)(3) organization with chapters accross the U.S. and Canada. The Cal Poly chapter was founded in 2018 to provide software solutions to San Luis Obispo nonprofits and prepare students to use tech for the greater good.
                </Col>
            </Row>
        </Container>
        <div style={{margin: '40px'}}/>
        </div>
        <Card style={{marginBottom:30}}>
            <Card.Body>
              <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h3>Meet Our Team</h3>
                    </Col>
                </Row>
              </Container>
              <div style={{margin: '40px'}}/>
              {this.renderDirectorInfo()}
            </Card.Body>
        </Card>

        <Card style={{marginBottom:30}}>
            <Card.Body>
              <Container>
                <Row>
                    <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h3 style={{ marginBottom:30 }}>Testimonials</h3>
                    </Col>
                </Row>
              </Container>
              {this.renderTestimonials()}
            </Card.Body>
        </Card>
        
      </div>
    )
  }

}

export default AboutUs;