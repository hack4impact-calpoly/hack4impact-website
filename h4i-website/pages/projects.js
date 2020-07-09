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
        projectName: 'SLO Botanical Gardens Volunteer Hour Tracking Website',
        productDescription:
        "We created an interface to a new SQL database storing beach cleanup data, which was previously stored in spreadsheets. Our product allows ECOSLO to fully manage and utilize years worth of data easily to spread public awareness and gain funding.",
        techStackDescription: "React.js Node.js Express PostgreSQL Heroku",
        teamMembersDescription: "Elena Fowler, Anna Reid, Ben Glossner, Ethan Abrams, Comal Virdi, Reilly Salkowski",
        githubURL: "https://github.com/hack4impact-calpoly/EcosloDataApp",
        pictures: ["./images/ecoslo-project/home.png", "./images/ecoslo-project/login.png", "./images/ecoslo-project/add.png", "./images/ecoslo-project/view.png", "./images/ecoslo-project/update.png", "./images/ecoslo-project/alter.png"]
    },
    {
        projectName: 'CASA Volunteer Advocate Hour Tracking Site',
        productDescription:
        "We created an interface to a new SQL database storing beach cleanup data, which was previously stored in spreadsheets. Our product allows ECOSLO to fully manage and utilize years worth of data easily to spread public awareness and gain funding.",
        techStackDescription: "React.js Node.js Express PostgreSQL Heroku",
        teamMembersDescription: "Elena Fowler, Anna Reid, Ben Glossner, Ethan Abrams, Comal Virdi, Reilly Salkowski",
        githubURL: "https://github.com/hack4impact-calpoly/EcosloDataApp",
        pictures: ["./images/ecoslo-project/home.png", "./images/ecoslo-project/login.png"]
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