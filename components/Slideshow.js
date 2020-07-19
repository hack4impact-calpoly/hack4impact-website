

class Slideshow extends React.Component {
   constructor(props) {
       super(props)
       console.log("props " +props)
   }

   render() {
      return (
         <div>
            <div className="card mb-6" style={{border: "none"}}>
               <div className="row no-gutters">
               <div className="col-md-2"></div>
                     <div className="col-md-8">
                        <img width="100%" height="auto" src={this.props.image}></img>
                     </div>
               </div>
               <div className="col-md-2"></div>
            </div>
         </div>
      )
   }
}

export default Slideshow;