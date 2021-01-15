import { Card } from "react-bootstrap";

const HomePageProjects = props => (
  <Card>
    <img src={props.picture} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
  </Card>
);

export default HomePageProjects;
