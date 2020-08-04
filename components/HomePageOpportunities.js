import { Card, Button } from "react-bootstrap";
  
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
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button style={{marginTop: '1em'}} variant="solid" href={this.props.href}>{this.props.buttonText}</Button>
                </Card.Body>
            </Card>
        </>
    )
  }
}

export default HomePageProjects
  