import fetch from "node-fetch";
import Head from "next/head";

import {Button, Card, Container, Row, Col} from "react-bootstrap";

import Slideshow from "../components/Slideshow.js";
import logo from '../public/images/H4i_square_small.png';

import PageCard from '../components/PageCard.js';
import CardMosaic from '../components/CardMosaic.js';
import ProjectCard from '../components/ProjectCard.js';
import ButtonLink from '../components/ButtonLink';

const slides = [
  { url: "../images/spring2019hike.png", description: 'club hike to the P' },
  { url: "../images/saraford.png", description: 'group photo after the Sarah Ford talk' },
  { url: "../images/2018group.png", description: 'start of the 2018 school year' },
  { url: "../images/ericIvonne.png", description: 'Eric and Ivonne at Club Showcase' },
  { url: "../images/selfie.png", description: 'director meeting at SLODOCO' },
  { url: "../images/hill.png", description: 'Antonio, Ethan, and John hiking the P' },
];

const homePageOpportunities = [
  {
      title: 'Students',
      description:"We pride ourselves on being an interdisciplinary organization and accept individuals from all majors and years. Whether you're interested in being a software developer, product manager, or designer, we want to hear from you.",
      image: '../images/students.png',
      alt: 'SLODOCO Director Meeting',
      link: '/students',
      buttonText: "I'm a student"
    },
  {
      title: 'Nonprofits',
      description:"We do our best in seeking out nonprofit organizations that need help in San Luis Obispo and the surrounding areas. If your nonprofit has a project idea or could use a little help, please reach out!",
      image: '../images/plant.png',
      alt: 'ECOSLO tree planting volunteer event',
      link: '/nonprofits',
      buttonText: "I'm a Nonprofit"
    }
]

const Home = props => {
  const projectCards = props.projects.map((proj, i) => (
    <ProjectCard
      key={i}
      title={proj.nonprofitName}
      subtitle={proj.year}
      image={proj.background.url}
      blurb={proj.blurb}
    />
  ));

  const opportunityCards = homePageOpportunities.map((content, i) => (
    <ProjectCard
      key={i}
      title={content.title}
      blurb={content.description}
      image={content.image}
      alt={content.alt}
      link={content.link}
      buttonText={content.buttonText}
      full={true}
      big={true}
    />
  ));

  return (
    <>
      <Head>
        <title>Hack4Impact Cal Poly</title>
      </Head>

      <div style={{marginTop: '8em', marginBottom: '6em', alignContent: 'center', color: 'white'}}>
        <Container>
          <Row style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Col sm={12} md={6} style={{textAlign: 'center'}}>
              <img src={logo} style={{width: '20em'}}/>
            </Col>
            <Col sm={12} md={{span: 6, offset: 0}} lg={6} xl={6}>
              <h1>Hack4Impact Cal Poly</h1>
              <p>
                We are a student-run 501(c)(3) organization that empowers
                engineers, designers, activists, and humanitarians to create
                lasting social change by developing projects for local
                nonprofits. We foster the wider adoption of software as a
                tool for social good.
              </p>
              <div>
                <ButtonLink link={'about-us'} white={true}>Learn More</ButtonLink>
                <ButtonLink
                  target={'https://mailchi.mp/7f64492b7fb4/subscribe'}
                  white={true}>Newsletter</ButtonLink>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <PageCard>
        <h2>Who We Are</h2>
        <Slideshow images={slides} autoplay={true} />

        <ButtonLink link={'about-us'}>Get to know us</ButtonLink>
      </PageCard>

      <PageCard>
        <h2>Our Projects</h2>
        <p>Each year, we partner with nonprofits in our area to build
          software solutions to problems they are facing</p>
        <CardMosaic width={3} size={'large'}>{ projectCards }</CardMosaic>
        <ButtonLink link={'/projects'}>Learn More</ButtonLink>
      </PageCard>

      <PageCard>
        <h2>Opportunities</h2>
        <p>Find out how you can get involved</p>
        <CardMosaic width={2} size={'large'}>{ opportunityCards }</CardMosaic>
      </PageCard>

      {/* TODO: update with new sponsors
      <PageCard>
        <h2>Support</h2>
        <p>We are so thankful for our supporters and donors!</p>
        <div>
          <a href='https://whalebirdkombucha.com/' target='_blank' rel='noreferrer'>
            <img
              src='../images/supporters/whalebird.png'
              width='200px' height='200px'
            />
          </a>
        </div>
        <ButtonLink
          target="_blank"
          link="https://drive.google.com/file/d/1M1DmLNQIc0-xnvZY1-AqhXeBWND3ytr5/view?usp=sharing"
        >Support Us</ButtonLink>
      </PageCard>
      */}
   </>
  );
}

export async function getStaticProps({ params }) {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `{
          project: projectCollection (where:{featured:true}) {
            items {
              nonprofitName
              year
              blurb

              background {
                url(transform: {width:400, format:WEBP})
              }
            }
          }
        }`,
      }),
    }
  );

  const { data } = await res.json();
  return {
    props: {
      projects: data.project.items
    },
  };
}

export default Home;
