import { Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/directorCards.module.css";

const DirectorCards = props => (
  <>
    <Card
      className="bg-white text-black"
      style={{
        // overflow: "auto",
        height: "100%",
        width: "auto",
        // borderRadius: "50%",
        textAlign: "center",
        alignItems: "center",
        marginBottom: "0.4rem"
      }}
    >
      <Card.Img
        style={{
          objectFit: "cover",
          height: "200px",
        }}
        src={props.backgroundImage}
      />
      <Card.Text style={{ marginTop:".4rem",marginBottom: ".2rem" }}>
        <b>{props.name}</b>
        {' '}
        {props.linkedIn && (
          <SocialIcon
            style={{ height: 22, width: 22 }}
            target="_blank"
            url={props.linkedIn}
          />
        )}
      </Card.Text>
      <Card.Text style={{ marginBottom: ".15rem" }}>
        {props.position}
      </Card.Text>
    </Card>
  </>
);

export default DirectorCards;
