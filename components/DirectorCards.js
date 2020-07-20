import { Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/directorCards.module.css";

class DirectorCards extends React.Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <>
            <Card className="bg-white text-white" style={{overflow: 'auto', width: '100%', height: '100%'}}>
                <Card.Img src={this.props.backgroundImage} />
                    <Card.ImgOverlay>
                        <Card.Text style={{marginBottom: '.2rem'}}>
                            <b>{this.props.name}</b>
                        </Card.Text>
                        <Card.Text style={{marginBottom: '.2rem'}}>
                            {this.props.position}
                        </Card.Text>
                        <SocialIcon style={{height:30, width:30}} url={this.props.linkedIn}/>
                        
                        
                    </Card.ImgOverlay>
            </Card>
        </>
    )
  }
}

export default DirectorCards
