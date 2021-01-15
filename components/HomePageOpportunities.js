import { Card, Button } from "react-bootstrap";

const HomePageOpportunities = props => (
  <Card>
    <img src={props.picture} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <Button variant="solid" href={props.href}>{props.buttonText}</Button>
    </Card.Body>
  </Card>
);

export default HomePageOpportunities;
