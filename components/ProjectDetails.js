import {Card} from "react-bootstrap";
import {FaGithub, FaImages} from "react-icons/fa";
import styles from "../styles/projectDetails.module.css";
import FsLightbox from 'fslightbox-react';


class ProjectDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

  render() {
    return (
        <div>
        <FsLightbox
                toggler={this.state.isVisible}
                sources={this.props.pictures}
        />

      <Card style={{overflow: 'auto', marginBottom: '30px', width: '100%', height: '100%'}}>
          <div className={styles.container} >
            <img style={{width: '100%', height: '7rem', objectFit: 'cover'}} src={this.props.cardTilePicture} alt="" />
            <div className={styles.centered}>{this.props.projectName}</div>
          </div>
              
          <Card.Body>
          <Card.Text style={{marginBottom: '.3rem'}}>
                  <b>Product</b>
              </Card.Text>
              <Card.Text style={{marginBottom: '.3rem'}}>
                  {this.props.productDescription}
              </Card.Text>
              <Card.Text style={{marginBottom: '.3rem'}}>
                  <b>Tech Stack</b>
              </Card.Text>
              <Card.Text style={{marginBottom: '.3rem'}}>
                  {this.props.techStackDescription}
              </Card.Text>
              <Card.Text style={{marginBottom: '.3rem'}}>
                  <b>Team Members</b>
              </Card.Text>
              <Card.Text style={{marginBottom: '.3rem'}}>
                  {this.props.teamMembersDescription}
              </Card.Text>
              <div style={{margin: '10px'}}/>
              <div style={{alignContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                
                <a style={{marginRight: '5px'}} href={this.props.githubURL}>
                    <FaGithub  style={{width: '30px', height: '30px', color: 'black'}} />
                </a>

                <a><FaImages style={{width: '30px', height: '30px', marginLeft: '5px',}} onClick={() => {
            this.setState({ isVisible: !this.state.isVisible })
          }}/></a>
              </div>
              
          </Card.Body>
      </Card>
    </div>

    )
  }
}

export default ProjectDetails