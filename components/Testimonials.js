import { SocialIcon } from "react-social-icons";

class Testimonials extends React.Component {
    constructor(props) {
        super(props)
        console.log("props " +props)
    }

  render() {
    return (
        <div>
            <div className="card mb-3" style={{border: "none"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img width="80%" height="auto" src={this.props.image}></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    
                    <p className="card-text">{this.props.quote}</p>
                    <h5 className="card-title" style={{marginTop: 70, display:"flex",justifyContent:"flex-end", alignContent:"flex-end"}}>{this.props.name}</h5>
                    <p className="card-text" style={{display:"flex",justifyContent:"flex-end", alignContent:"flex-end"}}><small className="text-muted">{this.props.classOf}</small></p>
                    <p className="card-text" style={{display:"flex",justifyContent:"flex-end", alignContent:"flex-end"}}><SocialIcon style={{height:30, width:30}} url={this.props.linkedIn}/></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
  }
}

export default Testimonials