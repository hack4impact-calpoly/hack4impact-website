import {Button, Card, Container, Row, Col} from "react-bootstrap";
import Link from "next/link"
import {Timeline, Event} from "../components/Timeline";
import {FAQ} from "../components/FAQ";

class Students extends React.Component {
  render() {
    return (
      <div>
        <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center', color: 'white'}} >
          <h1 style={{color: 'white', alignSelf: 'center'}}>Students</h1>
          <div style={{margin: '20px'}}/>
          <Container>
              <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Col sm={12} md={8} lg={6} xl={6}>
                    We strive to both prepare students for socially consious roles in tech while creating a supportive community. Here are some fun events we hold for our members.
                  </Col>
              </Row>
          </Container>
          <div style={{margin: '40px'}}/>
        </div>
        <Container>
          <Timeline title="Application Process">
               <Event title="Written Application" date="Fall Quarter Weeks 1-3">
                  We accept written applications every year in the start of Fall Quarter. We have positions open for developers, PM's, and designers, so you can indicate your position preferences here. If you want to chat in person or have questions, come see us
                  at the WOW Club Showcase or send us an email.
               </Event>
               <Event title="Interview" date="Fall Quarter Weeks 2-4">
                   We will reach out to schedule an interview if your interests and skills match what we are looking for. Don't stress about your interview!
                   We want to get to know you and why you're passionate about joining H4I and our mission. If you are applying for a developer position, we may ask technical questions,
                   but we encourage everyone to apply regardless of experience level. 
               </Event>
               <Event title="Notified of Membership Decision" date="Mid Fall Quarter">
                   We will email you when we have reached a decision on your application. Unfortunately, we are not able to accept every studetn who applies. The number of students in our club
                   is determined by the number of nonprofit projects we take on for the year. However, we are taking on more and more projects and growing the number of students and positions every year.
               </Event>
            </Timeline>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button variant='outline'>Apply Now</Button>
            </div>
            <div style={{margin: '40px'}}/>

            <h2 style={{textAlign: 'center', color: 'white'}}>Events</h2>
            <div style={{margin: '30px'}}/>
            <Row>
              <Col sm={12} md={12} lg={4} xl={4}>
                <Card>
                <Card.Img style={{objectFit: 'cover'}} variant="top" src="./images/spring1.jpg" />
                  <Card.Body>
                    <Card.Title>Educational</Card.Title>
                    <Card.Text>
                    We start each year off with bootcamp, which is your chance to learn what Hack4Impact Cal Poly is all about! 
                      During bootcamp our members attend workshops and get familiar with the tools they will use on their project team. Throughout the year we also host
                      tech talks and speaker events with professors and other professionals.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div style={{margin: '40px'}}/>
              </Col>

              <Col sm={12} md={12} lg={4} xl={4}>
              <Card>
              <Card.Img style={{objectFit: 'cover'}} variant="top" src="./images/outlook.jpg" />
              <Card.Body>
                <Card.Title>Social</Card.Title>
                <Card.Text>
                We love our work because of our amazing members! We host social events so that all of our members can get to know each other, and take a break
                  from their school work. We've hosted game nights, events with other clubs, gone on hikes, and many trips to Slodoco. We also have a banquet every year to celebrate everyone's hard work.
                </Card.Text>
              </Card.Body>
            </Card>
            <div style={{margin: '40px'}}/>
              </Col>

              <Col sm={12} md={12} lg={4} xl={4}>
              <Card>
              <Card.Img style={{objectFit: 'cover'}} variant="top" src="./images/ecoslo-volunteering.jpg" />
              <Card.Body>
                <Card.Title>Giving Back</Card.Title>
                <Card.Text>
                We try to learn about our nonprofit partners' missions and work beyond our technical projects as well! We volunteer with every nonprofit we partner with
                  for the year so that each member learns about their work, regardless of their project team. One example of a volutneer event we had was going to plant trees
                  with the Environmental Center of SLO.
                </Card.Text>
              </Card.Body>
            </Card>
              </Col>
            </Row>
            

            {/* <Card>
              <Card.Body>
                <Row >
                  <Col sm={12} md={8} lg={3} xl={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{width: '100%', objectFit: 'fill'}} src={"./images/ecoslo-project/home.png"} alt=""/>
                  </Col>
                  <Col sm={12} md={8} lg={9} xl={9}>
                    <Card.Title>Bootcamp</Card.Title>
                    <Card.Text>
                      Bootcamp is your chance to learn what Hack4Impact Cal Poly is all about! 
                      It takes place after we send out our acceptance emails, generally in early to mid October. 
                      You will attend workshops and get familiar using the tools you will use on your project team. Also, you’ll get to make friends and meet 
                      some awesome new people!
                    </Card.Text>
                  </Col>
                </Row>
                
              </Card.Body>
            </Card>

            <div style={{margin: '40px'}}/>

            <Card>
              <Card.Body>
              <Row >
                  
                  <Col sm={12} md={8} lg={9} xl={9}>
                <Card.Title>Volunteer Events</Card.Title>
                <Card.Text>
                  We try to learn about and help our nonprofit partners with all the amazing work that they do! We try to volunteer with every nonprofit we partner with
                  for the year so that each member can learn about their work, even if they aren't working on their technical project. One example of a volutneer event we had was with 
                  the Environmental Center of SLO. We helped them plant trees, and even got some kombucha as a gift.
                </Card.Text>
                </Col>
                <Col sm={12} md={8} lg={3} xl={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{width: '100%', objectFit: 'fill'}} src={"./images/ecoslo-project/home.png"} alt=""/>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div style={{margin: '40px'}}/>

            <Card>
              <Card.Body>
              <Row >
                  <Col sm={12} md={8} lg={3} xl={3} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{width: '100%', objectFit: 'fill'}} src={"./images/ecoslo-project/home.png"} alt=""/>
                  </Col>
                  <Col sm={12} md={8} lg={9} xl={9}>
                <Card.Title>Social Events</Card.Title>
                <Card.Text>
                  We love our work because of our amazing members! We host social events so that all of our members can get to know each other, and take a break
                  from their school work. We've hosted game nights, events with other clubs, and we have a banquet every year to celebrate everyone's hard work.
                </Card.Text>
                </Col>
                </Row>
              </Card.Body>
            </Card> */}


            <FAQ style={{width:'100%'}}>
            <question
                  ask="What types of roles can students have?"
               >
                 We recruit for software developers, product managers, and designers. On each nonprofit project team, we have around 4-5 developers,
                 1-2 product managers, and 1-2 designers. If there is a role that we don't currently offer and that interests you, let us know! We want our
                 members to be passionate about their work and are always looking to make our project teams stronger.
               </question>
               <question
                  ask="How many students are in Hack4Impact?"
               >
                  Hack4Impact is a national organization, so there are currently around 400 students nationally. At the Cal Poly chapter,
                  we currently have around 25 members. However, the number of members we have is determined by how many nonprofit projects we take on for the year, 
                  and we are constantly growing.
               </question>
               <question
                  ask="I'm a first year. Do I need any specific technical experience to be a developer?"
               >
                  Nope! The most important characteristics we consider during the application process are a passion for our mission and a committment to learning.
                  We encourage you to start exploring web development, and do take web development experience into consideration during applications, but it is not required.
               </question>
               <question
                  ask="What major do you have to be to apply?"
               >
                  We accept and consider applications from students of all majors. We believe creating tech for social good requires diverse perspectoves and experiences, so 
                  we take pride in being a multidisciplinary club. The majority of our current members are CPE, CSC, and SE majors, but we also have people from CLA and CAED.
               </question>
               <question
                  ask="What is the expected time commitment?"
               >
                 Most students spend about 3 hours per week on Hack4Impact project work. Each project team determines their own schedule, but most meet for about 1 hour per week
                 to plan and delegate tasks. The other time is spent working on the projet individually. We also hold general meetings every other week, which are about 1 hour long. H4I holds many other events during the year, such as volunteer events,
                 tech talks, and social events. These events are not mandatory, but we highly encourage our members to attend. 
               </question>
               
            </FAQ>

            </Container>
        
      </div>
    )
  }
}

export default Students;