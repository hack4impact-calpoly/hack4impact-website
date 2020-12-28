import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import DirectorCards from "../components/DirectorCards.js";
import { CardMosaic } from "../components/CardMosaic.js";
import Testimonials from "../components/Testimonials.js";
import Slider from "react-slick";
import fetch from "node-fetch";

const teamInfo = [
  {
    name: "Eric Newcomer",
    position: "Co Executive Director",
    backgroundImage: "./images/members/eric.png",
    linkedIn: "https://www.linkedin.com/in/eric-newcomer/",
  },
  {
    name: "Elena Fowler",
    position: "Co Executive Director",
    backgroundImage: "./images/members/elena.png",
    linkedIn: "https://www.linkedin.com/in/elena-fowler/",
  },
  {
    name: "Ethan Zimbelman",
    position: "Director of Technology",
    backgroundImage: "./images/members/ethan.png",
    linkedIn: "https://www.linkedin.com/in/ethan-zimbelman/",
  },
  {
    name: "Tim Kim",
    position: "Director of Outreach",
    backgroundImage: "./images/members/tim.png",
    linkedIn: "https://www.linkedin.com/in/timothy-kim-a56929168/",
  },
  {
    name: "Jillian Quinn",
    position: "Director of PR",
    backgroundImage: "./images/members/jillian.png",
    linkedIn: "https://www.linkedin.com/in/jillian-quinn/",
  },
  {
    name: "Finlay Piroth",
    position: "Director of Operations",
    backgroundImage: "./images/members/fin.png",
    linkedIn: "https://www.linkedin.com/in/finlay-piroth/",
  },
  {
    name: "Anna Reid",
    position: "Director of Finance",
    backgroundImage: "./images/members/anna.png",
    linkedIn: "https://www.linkedin.com/in/anna-reid/",
  },
];

const testimonials = [
  {
    name: "Sydney Nguyen",
    classOf: "Class of 2020",
    quote:
      "“My educational background is Architecture, so I have some experience in understanding visual design and communications. However, my design role in H4I adapted to understanding more UX design, which has overlapping concepts with architecture. I also had to learn to work with computer science/ software engineering students, which have been a lot of fun collaborating because the people in H4I are all very sweet people. I really enjoy working with interdisciplinary teams that share the same values as me, so creating services for local community members with the H4I team has been wonderful!”",
    image: "./images/members/sydney.png",
    linkedIn: "https://www.linkedin.com/in/sydney-t-nguyen/",
  },
  {
    name: "Reilly Salkowski",
    classOf: "Class of 2022",
    quote:
      "“I’m so grateful for the unique opportunity Hack4Impact gave me to gain valuable development experience while contributing to a meaningful project with fun, passionate people!”",
    image: "./images/members/reilly.png",
    linkedIn: "https://www.linkedin.com/in/reilly-salkowski",
  },
  {
    name: "Jay Sung",
    classOf: "Class of 2021",
    quote:
      "“It’s awesome being able to get programming experience while helping others.”",
    image: "./images/members/jay.png",
    linkedIn:
      "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3BJS6IOCCWQCWnowakpKo%2F%2Bg%3D%3D",
  },
  {
    name: "Cole Perry",
    classOf: "Class of 2022",
    quote:
      "“I really enjoy being in H4I because it is full of motivated students who are eagerly using classroom and personal experiences to make a difference in the community.”",
    image: "./images/members/cole.png",
    linkedIn: "https://www.linkedin.com/in/cole-perry/",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

// pages/about-us
export async function getStaticProps() {
  // first, grab our Contentful keys from the .env file
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  // then, send a request to Contentful (using the same URL from GraphiQL)
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: "POST", // GraphQL *always* uses POST requests!
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`, // add our access token header
      },
      // send the query we wrote in GraphiQL as a string
      body: JSON.stringify({
        // all requests start with "query: ", so we'll stringify that for convenience
        query: `
        {
          personCollection(where: {
            OR: [
            #{role_contains: "Director"},
              {profilePicture_exists: true}
            ]
          }) {
            items {
              fullName
              role
              isAlumni
              profilePicture {
                url
              }
              linkedIn
            }
          }
        }
                `,
      }),
    }
  );
  // grab the data from our response
  const { data } = await res.json();
  return {
    props: {
      members: data.personCollection.items,
    },
  };
}

function AboutUs({ members }) {
  const renderDirectorInfo = () => {
    let directorCards = teamInfo.map((d) => {
      return (
        <DirectorCards
          name={d.name}
          position={d.position}
          backgroundImage={d.backgroundImage}
          linkedIn={d.linkedIn}
        />
      );
    });
    return (
      <>
        <CardMosaic width={5}>{directorCards}</CardMosaic>
      </>
    );
  };

  const renderMemberInfo = () => {
    let memberCards = members.map((m) => {
      return (
        <DirectorCards
          name={m.fullName}
          position={m.role}
          backgroundImage={!m.profilePicture ? teamInfo[0].backgroundImage : m.profilePicture.url}
          linkedIn={m.linkedIn}
        />
      );
    });

    return (
      <>
        <CardMosaic width={5}>{memberCards}</CardMosaic>
      </>
    );
  };

  const renderTestimonials = () => {
    let testimonialCards = testimonials.map((content) => {
      return (
        <Testimonials
          name={content.name}
          classOf={content.classOf}
          quote={content.quote}
          image={content.image}
          linkedIn={content.linkedIn}
        />
      );
    });
    return (
      <Container>
        <div>
          <Slider {...settings} style={{ marginBottom: 20 }}>
            {/* Fill in testimonials here */}
            <div>{testimonialCards[0]}</div>
            <div>{testimonialCards[1]}</div>
            <div>{testimonialCards[2]}</div>
            <div>{testimonialCards[3]}</div>
          </Slider>
        </div>
      </Container>
    );
  };
  return (
    <>
      <div
        style={{
          marginTop: "50px",
          alignContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ color: "white", alignSelf: "center" }}>Who We Are</h1>
        <div style={{ margin: "20px" }} />
        <Container>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col sm={12} md={8} lg={6} xl={6}>
              Hack4Impact is a 501(c)(3) organization with chapters across the
              U.S. and Canada. The Cal Poly chapter was founded in 2018 to
              provide software solutions to San Luis Obispo nonprofits and
              prepare students to use tech for the greater good.
            </Col>
          </Row>
        </Container>
        <div style={{ margin: "40px" }}></div>
      </div>

      <Card style={{ marginBottom: 30 }}>
        <Card.Body>
          <h3 className="card-heading">Meet Our Members</h3>
          {renderDirectorInfo()}
          {renderMemberInfo()}
        </Card.Body>
      </Card>

      <Card style={{ marginBottom: 30 }}>
        <Card.Body>
          <h3 className="card-heading">Hear From Our Members</h3>
          {renderTestimonials()}
        </Card.Body>
      </Card>
    </>
  );
}

export default AboutUs;
