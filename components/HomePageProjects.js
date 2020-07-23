import { Card } from "react-bootstrap";
  
class HomePageProjects extends React.Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <>
          <Card style={{ width: 'auto', background: '#f4f4f4' }}>
            <img src={this.props.picture} style={{width: '100%'}}/>
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.date}</Card.Subtitle>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card>
        </>
    )
  }
}

export default HomePageProjects
  
  
  
  
  


