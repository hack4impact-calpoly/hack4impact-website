import {Container, Row, Col} from "react-bootstrap";
import ProjectDetails from "../components/ProjectDetails.js";

const projectCardData = [
    {
        projectName: 'Environmental Center of San Luis Obispo Beach Cleanup Database',
        productDescription:
        "We created an interface to a new SQL database storing beach cleanup data, which was previously stored in spreadsheets. Our product allows ECOSLO to fully manage and utilize years worth of data easily to spread public awareness and gain funding.",
        techStackDescription: "React.js Node.js Express PostgreSQL Heroku",
        teamMembersDescription: "Elena Fowler, Anna Reid, Ben Glossner, Ethan Abrams, Comal Virdi, Reilly Salkowski",
        githubURL: "https://github.com/hack4impact-calpoly/EcosloDataApp",
        pictures: ["./images/ecoslo-project/home.png", "./images/ecoslo-project/login.png", "./images/ecoslo-project/add.png", "./images/ecoslo-project/view.png", "./images/ecoslo-project/update.png", "./images/ecoslo-project/alter.png"]
    },
    {
        projectName: 'Cal Poly Cat Program Cat Profiles',
        productDescription:
        "We created an interface to a new SQL database storing beach cleanup data, which was previously stored in spreadsheets. Our product allows ECOSLO to fully manage and utilize years worth of data easily to spread public awareness and gain funding.",
        techStackDescription: "React.js Node.js Express PostgreSQL Heroku",
        teamMembersDescription: "Elena Fowler, Anna Reid, Ben Glossner, Ethan Abrams, Comal Virdi, Reilly Salkowski",
        githubURL: "https://github.com/hack4impact-calpoly/EcosloDataApp",
        pictures: ["./images/ecoslo-project/home.png", "./images/ecoslo-project/login.png"]
    },
    {
        projectName: 'SLO Botanical Gardens Volunteer Hour Tracker',
        productDescription:
        "We created a Volunteer Management System that allows volunteers to record their hours and view their volunteer history, and in addition, allows nonprofit supervisors to keep this information and export it when necessary.",
        techStackDescription: "Django, Python, JavaScript, HTML, CSS, PostgreSQL, Heroku",
        teamMembersDescription: "Eric Newcomer, Tim Kim, Cole Perry, Justin Poist, Jack Fales",
        githubURL: "https://github.com/hack4impact-calpoly/slobg-track",
        pictures: ["./images/slobg-project/home.png", "./images/slobg-project/table.png", "./images/slobg-project/login.png"]
    },
    {
        projectName: 'CASA Volunteer Form Tracker',
        productDescription:
        "We built an volunteer advocate form tracker for CASA (Court Appointed Special Advocates). The app tracks important advocate information that allows CASA to receive government funding.",
        techStackDescription: "Django, Python, JavaScript, HTML, CSS, PostgreSQL, Heroku",
        teamMembersDescription: "Eric Newcomer, Ethan Zimbelman, Ben Glossner, Antonio Aguilar, Elena Fowler, Chloe Hebert",
        githubURL: "https://github.com/hack4impact-calpoly/CASA-Track",
        pictures: ["./images/casa-project/home.png", "./images/casa-project/esig.png"]
    }
]


class Projects extends React.Component {

    renderProjectDetailCards() {
        let projectCards = projectCardData.map((content) => {
            console.log(content)
            return <ProjectDetails projectName={content.projectName} productDescription={content.productDescription}
            techStackDescription={content.techStackDescription} teamMembersDescription={content.teamMembersDescription}
            githubURL={content.githubURL} pictures={content.pictures}/>
        });

        let rowGroups = [];
        while(projectCards.length){
          rowGroups.push(projectCards.splice(0, 2));
        }
        let rows = rowGroups.map((cardRowArray, index) => {
          return(
            <Row>
                {cardRowArray[0]}
                {cardRowArray[1]}
            </Row>
          );
        })

        return (
            <Container>
                {rows}
            </Container>
        );
    }

  render() {
    return (
      <div>
        <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center', color: 'white'}} >
        <h1 style={{color: 'white', alignSelf: 'center'}}>Our Work</h1>
        <div style={{margin: '20px'}}/>
        <Container>
            <Row>
                <Col/>
                <Col>
                Each school year we build a product for 3-5 nonprofits to help them better serve their communities. Here are a few projects that we have built over the years.

                </Col>
                <Col/>
            </Row>
        </Container>
        <div style={{margin: '40px'}}/>
        </div>
        {this.renderProjectDetailCards()}
      </div>
    )
  }
}

export default Projects;