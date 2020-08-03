import {Container, Row, Col} from "react-bootstrap";
import ProjectDetails from "../components/ProjectDetails.js";

const projectCardData = [
    {
        projectName: 'Environmental Center of San Luis Obispo Beach Cleanup Database',
        cardTilePicture: "./images/ecoslo-project/ecoslo-card-tile.jpg",
        productDescription:
        "We created an interface to a new SQL database storing beach cleanup data, which was previously stored in spreadsheets. Our product allows ECOSLO to fully manage and utilize years worth of data easily to spread public awareness and gain funding.",
        techStackDescription: "React.js, Node.js, Express, PostgreSQL, Heroku",
        teamMembersDescription: "Elena Fowler, Anna Reid, Ben Glossner, Ethan Abrams, Comal Virdi, Reilly Salkowski",
        githubURL: "https://github.com/hack4impact-calpoly/EcosloDataApp",
        pictures: ["./images/ecoslo-project/home.png", "./images/ecoslo-project/login.png", "./images/ecoslo-project/add.png", "./images/ecoslo-project/view.png", "./images/ecoslo-project/update.png", "./images/ecoslo-project/alter.png"]
    },
    {
        projectName: 'Cal Poly Cat Program Cat Directory',
        cardTilePicture: "./images/cpcp-project/cpcp-card-tile.jpg",
        productDescription:
        "We developed a web and mobile app to allow the Cal Poly Cat Program to easily keep track of their cats, documents, and upcoming events, which were previously stored in an excel sheet. Now, volunteers can spend more time with the cats instead of on paperwork.",
        techStackDescription: "Django, Python, PostgreSQL, Swift, AWS, Heroku",
        teamMembersDescription: "Ethan Zimbelman, Finlay Piroth, Jillian Quinn, Jay Sung, Evan Witulski, Sydney Nguyen",
        githubURL: "https://github.com/hack4impact-calpoly/calpoly-cat-program",
        pictures: ["./images/cpcp-project/home.png", "./images/cpcp-project/cat_profile.png", "./images/cpcp-project/events.png"]
    },
    {
        projectName: 'SLO Botanical Gardens Volunteer Hour Tracker',
        cardTilePicture: "./images/slobg-project/slobg-card-tile.jpg",
        productDescription:
        "We created a Volunteer Management System for SLOBG allowing volunteers to accurately record their hours and view their volunteer history. Additionally, nonprofit supervisors can view and manage all the volunteer information and export it when necessary.",
        techStackDescription: "Django, Python, JavaScript, PostgreSQL, HTML, CSS, and Heroku",
        teamMembersDescription: "Eric Newcomer, Tim Kim, Cole Perry, Justin Poist, Jack Fales",
        githubURL: "https://github.com/hack4impact-calpoly/slobg-track",
        pictures: ["./images/slobg-project/home.png", "./images/slobg-project/table.png", "./images/slobg-project/login.png"]
    },
    {
        projectName: 'CASA Volunteer Form Tracker',
        cardTilePicture: "./images/casa-project/casa-card-tile.jpg",
        productDescription:
        "We built an advocate form tracker for Court Appointed Special Advocates. The app accurately tracks information about the advocate's interactions with their foster children, allowing CASA to receive government funds and donations.",
        techStackDescription: "Django, Python, JavaScript, HTML, CSS, PostgreSQL, Heroku",
        teamMembersDescription: "Eric Newcomer, Ethan Zimbelman, Ben Glossner, Antonio Aguilar, Elena Fowler, Chloe Hebert",
        githubURL: "https://github.com/hack4impact-calpoly/CASA-Track",
        pictures: ["./images/casa-project/home.png", "./images/casa-project/esig.png"]
    }
]


class Projects extends React.Component {

    renderProjectDetailCards() {
        let projectCards = projectCardData.map((content) => {
            return <ProjectDetails projectName={content.projectName} productDescription={content.productDescription}
            techStackDescription={content.techStackDescription} teamMembersDescription={content.teamMembersDescription}
            githubURL={content.githubURL} pictures={content.pictures}
            cardTilePicture={content.cardTilePicture}/>
        });

        let rowGroups = [];
        while(projectCards.length){
          rowGroups.push(projectCards.splice(0, 2));
        }
        let rows = rowGroups.map((cardRowArray, index) => {
          return(
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col sm={11} md={6} lg={5} xl={5}>
                {cardRowArray[0]}
                </Col>
                <Col sm={11} md={6} lg={5} xl={5}>
                {cardRowArray[1]}
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

  render() {
    return (
      <div>
        <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center', color: 'white'}} >
        <h1 style={{color: 'white', alignSelf: 'center'}}>Our Work</h1>
        <div style={{margin: '20px'}}/>
        <Container>
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col sm={12} md={8} lg={6} xl={6}>
                Each school year we partner 3-6 nonprofits to help them better serve their communities. Here are a few projects that we have built over the years.
                </Col>
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
