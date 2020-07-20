import {Card} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap";
import DirectorCards from "../components/DirectorCards.js";
import {CardMosaic} from "../components/CardMosaic.js";
import Testimonials from "../components/Testimonials.js";
import Slider from "react-slick";


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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


class AboutUs extends React.Component {

    renderDirectorInfo() {
      let directorCards = teamInfo.map((content) => {
          return <DirectorCards name={content.name} position={content.position}
          backgroundImage={content.backgroundImage} linkedIn={content.linkedIn}/>
      });

      return (
        <>
          <CardMosaic width={3}>
            {directorCards}
          </CardMosaic>
        </>
      );
    }

    renderTestimonials(){
      let testimonialCards = testimonials.map((content) => {
        return <Testimonials name={content.name} classOf={content.classOf}
        quote={content.quote} image={content.image}/>
    });
        return (
          <Container>
            <div>
              <Slider {...settings} style={{marginBottom:20}}>
                {/* Fill in testimonials here */}
                <div>
                  {testimonialCards[0]}
                </div>
                <div>
                  {testimonialCards[0]}
                </div>
                <div>
                  {testimonialCards[0]}
                </div>
                <div>
                  {testimonialCards[0]}
                </div>
                <div>
                  {testimonialCards[0]}
                </div>
                <div>
                  {testimonialCards[0]}
                </div>
              </Slider>
            </div>
          </Container>
      );
    }

  render() {
    return (
      <>
        <h1 className="page-title">Who We Are</h1>
        <p className="page-desc">
          Hack4Impact is a 501 (c)(3) organization with chapters across the U.S. and Canada. The Cal Poly chapter was founded in 2018 to provide software solutions to San Luis Obispo nonprofits and prepare students to use tech for the greater good.
        </p>

        <Card style={{marginBottom:30}}>
            <Card.Body>
              <h3 className="card-heading">Meet Our Team</h3>
              {this.renderDirectorInfo()}
            </Card.Body>
        </Card>

        <Card style={{marginBottom:30}}>
            <Card.Body>
              <h3 className="card-heading">Testimonials</h3>
              {this.renderTestimonials()}
            </Card.Body>
        </Card>
        
      </>
    )
  }

}

export default AboutUs;
