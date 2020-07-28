import {Container, Row, Col, Form, Button, Card} from "react-bootstrap";
import emailjs from 'emailjs-com';

class ContactUs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }



    sendEmail(e) {
        e.preventDefault();
        var template_params = {
            email: this.state.email,
            name: this.state.name,
            message: this.state.message
         }

         if(this.state.name === '' || this.state.email === '' || this.state.message === ''){
             alert('Please enter a value for all fields.');
             return
         }
    
        emailjs.send('gmail', 'template_sYBbJw2P', template_params, 'user_37Rxslf3gloCL9mmB77FW')
          .then((result) => {
              alert("Your message was sent successfully!")
              this.setState({name: '', email: '', message: ''})
              
          }, (error) => {
            alert("Something went wrong. Please try again.")
            this.setState({name: '', email: '', message: ''})
          });
      }

      handleNameChange(e) {
          this.setState({name: e.target.value})
      }

      handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handleMessageChange(e) {
        this.setState({message: e.target.value})
    }

  render() {
    return (
      <div>
        <div style={{marginTop: '50px', alignContent: 'center', textAlign: 'center', color: 'white'}} >
        <h1 style={{color: 'white', alignSelf: 'center'}}>Contact Us</h1>
        <div style={{margin: '20px'}}/>
        <Container>
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col sm={12} md={8} lg={6} xl={6}>
                    We want to hear from you! If you have any questions about what we do or how to get involved, send us a message below or at calpoly@hack4impact.org.
                </Col>
            </Row>
        </Container>
        <div style={{margin: '40px'}}/>
        </div>
        
        <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Col sm={11} md={8} lg={8} xl={7}>
        <Card>
            <Card.Body>
            <Form >
                <Form.Group>
      <Form.Control placeholder="Name" value={this.state.name} onChange={(e) => this.handleNameChange(e)} />
      </Form.Group>
      <Form.Group>
      <Form.Control placeholder="Email" type="email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)}/>
      </Form.Group>
      
      <Form.Group>
        <Form.Control placeholder="Message" as="textarea" rows="8" value={this.state.message} onChange={(e) => this.handleMessageChange(e)} />
      </Form.Group>
      
      
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Button variant="solid" block onClick={(e) => this.sendEmail(e)}>Submit</Button>
      </div>
    </Form>
    
            </Card.Body>
        </Card>
        </Col>
        </Row>
        
        <div style={{margin: '40px'}}/>
      </div>

      
    )
  }
}

export default ContactUs;