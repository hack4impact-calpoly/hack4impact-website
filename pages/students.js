import {Button, Card} from "react-bootstrap";

class Students extends React.Component {
  render() {
    return (
      <div>
        <h1>Students Page</h1>
        <Card>
            <Card.Body>
            <Button variant="solid" >Tester Solid</Button>
        <Button variant="outline">Tester Outline</Button>
        <Button variant="solid" size="xs">Tester small</Button>
            </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Students;