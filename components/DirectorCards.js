import { Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/directorCards.module.css";

class DirectorCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Card
          className="bg-white text-black"
          style={{
            // overflow: "auto",
            width: "100%",
            height: "100%",
            // borderRadius: "50%",
            textAlign: "center",
            alignItems: "center",
            marginBottom: "0.4rem"
          }}
        >
          <Card.Img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "200px",
            }}
            src={this.props.backgroundImage}
          />
          {/* <Card.ImgOverlay> */}
          <Card.Text style={{ marginTop:".2rem",marginBottom: ".2rem" }}>
            <b>{this.props.name}</b>
          </Card.Text>
          <Card.Text style={{ marginBottom: ".2rem" }}>
            {this.props.position}
          </Card.Text>
          {this.props.linkedIn ? (
            <SocialIcon
              style={{ height: 30, width: 30 }}
              target="_blank"
              url={this.props.linkedIn}
            />
          ) : (
            " "
          )}
          {/* </Card.ImgOverlay> */}
        </Card>
      </>
    );
  }
}

export default DirectorCards;
