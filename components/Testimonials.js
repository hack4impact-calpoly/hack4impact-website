import { SocialIcon } from "react-social-icons";
import styles from "../styles/Testimonals.module.css";

const Testimonials = props => (
  <>
    <div className={"card mb-3 " + styles.card}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img width="100%" height="auto" src={props.image}></img>
        </div>

        <div className="col-md-8">
          <div className={"card-body " + styles.cardInfo}>
            <p className="card-text">{props.quote}</p>
            <h5 className="card-title">{props.name}</h5>
            <p className={"text-muted " + styles.subheading}>
              {props.classOf}
            </p>
            <div>
              <SocialIcon style={{height:30, width:30}}
                target="_blank" url={props.linkedIn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Testimonials;
