import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import PersonCard from "../components/PersonCard.js";
import CardMosaic from "../components/CardMosaic.js";
import Testimonials from "../components/Testimonials.js";
import Slider from "react-slick";
import fetch from "node-fetch";

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

function AboutUs({ members, directors, alum }) {
  const directorOrder = [
    "Co-Executive Director",
    "Director of Product",
    "Director of Engineering",
    "Director of Community",
    "Director of Public Relations",
    "Director of Operations",
    "Director of Finance",
    "Associate Director of Product",
    "Associate Director of Engineering"
  ];

  directors.sort((a, b) => directorOrder.indexOf(a.role) - directorOrder.indexOf(b.role));

  const directorCards = directors.map((d, index) => (
    <PersonCard key={index}
      name={d.fullName}
      position={d.role}
      backgroundImage={d.profilePicture.url}
      linkedIn={d.linkedIn}
    />
  ));

  const memberCards = members.map((m, index) => (
    <PersonCard key={index}
      name={m.fullName}
      position={m.role}
      backgroundImage={m.profilePicture.url}
      linkedIn={m.linkedIn}
    />
  ));

  // TODO: sort by year
  const alumFounders = alum.filter(a => a.role === "Co-Founder");
  const alumExecs = alum.filter(a => a.role === "Co-Executive Director");
  const alumDirectors = alum.filter(a => a.role.includes("Director") && a.role !== "Co-Executive Director");
  const alumGeneral = alum.filter(a => ![...alumFounders, ...alumExecs, ...alumDirectors].includes(a));

  const alumni = [...alumFounders, ...alumExecs, ...alumDirectors, ...alumGeneral];

  const alumCards = alumni.map((m, index) => (
    <PersonCard key={index}
      name={m.fullName}
      position={m.role}
      backgroundImage={m.profilePicture.url}
      linkedIn={m.linkedIn}
    />
  ));

  const testimonialCards = testimonials.map((content) => (
    <Testimonials
      name={content.name}
      classOf={content.classOf}
      quote={content.quote}
      image={content.image}
      linkedIn={content.linkedIn}
    />
  ));

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

      <Card style={{ marginBottom: 30, display: "flex", justifyContent: 'center' }}>
        <Card.Body>
          <h3 className="card-heading">Our Directors</h3>
          <CardMosaic width={5}>{directorCards}</CardMosaic>
        </Card.Body>
      </Card>

      <Card style={{ marginBottom: 30 }}>
        <Card.Body>
          <h3 className="card-heading">Our Members</h3>
          <CardMosaic width={5}>{memberCards}</CardMosaic> 
        </Card.Body>
      </Card>

      <Card style={{ marginBottom: 30 }}>
        <Card.Body>
          <h3 className="card-heading">Our Alumni</h3>
          <CardMosaic width={5}>{alumCards}</CardMosaic> 
        </Card.Body>
      </Card>

      <Card style={{ marginBottom: 30 }}>
        <Card.Body>
          <h3 className="card-heading">Hear From Our Members</h3>

          <Container>
            <Slider {...settings} style={{ marginBottom: 20 }}>
              {testimonialCards}
            </Slider>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export async function getStaticProps() {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `
        {
          members: personCollection(order: [fullName_ASC], where: {
            AND: [
              {role_not_contains: "Director"},
              {role_not_contains: "Advisor"},
              {profilePicture_exists: true},
              {isAlumni: false}
            ]
          }) {
            items {
              fullName
              role
              isAlumni
              profilePicture {
                url(transform: {width:400, format:WEBP})
              }
              linkedIn
            }
          }
          directors: personCollection(order: [fullName_ASC], where: {
            AND: [{role_contains:"Director", isAlumni:false}]}) {
            items{
              fullName
              role
              profilePicture {
                url(transform: {width:400, format:WEBP})
              }
              linkedIn
            }
          }
          alum: personCollection(order: [fullName_ASC], where: {
            AND: [{isAlumni:true}]}) {
            items{
              fullName
              role
              profilePicture {
                url(transform: {width:400, format:WEBP})
              }
              linkedIn
            }
          }
        }
                `,
      }),
    }
  );
  
  const { data } = await res.json();
  return {
    props: {
      members: data.members.items,
      directors: data.directors.items,
      alum: data.alum.items,
    },
  };
}

export default AboutUs;