import {Button} from "react-bootstrap"
import Link from "next/link"
import {Timeline, Event} from "../components/Timeline";
import {FAQ} from "../components/FAQ";

class Nonprofits extends React.Component {
   render() {
      return (
         <>
            <h1 className="page-title">Nonprofit Organizations</h1>
            <p className="page-desc">
               We know non-profits such as you provide immense value through the work
               you do. If you think custom technology would improve your organization, please
               let us know! It is our mission to make technology to help you serve
               your community better.
            </p>

            <div className="application-links">
               <Button variant="outline" size="lg" href="https://forms.gle/TFvuDaA5JmbF2jUB9" target="_blank">
                  Apply Now
               </Button>{' '}
               <div className="application-links">
               or <Link href="contact-us"><a className="inline-link">contact us</a></Link> for more info
               </div>
            </div>
            
            <Timeline title="Application Process">
               <Event title="Initial Contact" date="Early Summer">
                  Reach out to our team to get started in our application process!
                  We are interested in hearing about your organization and potential
                  projects you may have in mind.
               </Event>
               <Event title="Project Information" date="Late Summer">
                   We will reach out to you to get some specifics about the project
                   you have in mind. Such questions include the use case, potential
                   users, and other important things.
               </Event>
               <Event title="Director Consoltation" date="September">
                   The board of directors will consider the feasibility of your project for our teams.
               </Event>
               <Event title="Response" date="Late September">
                   We will let you know if we have choosen to take on your project.
                   If we did not take it on this year, please apply again. Since we
                   are also a nonprofit organization, we face many similar resource
                   limitations as you.
               </Event>
            </Timeline>

            <FAQ>
               <question
                  ask="What does the project timeline look like?"
               >
                  Most development begins at the start of the new year and continues
                  until around mid-April. Throughout all of this, we remain in constant
                  contact with you to ensure we are keeping our project in the right
                  direction.
               </question>
               <question
                  ask="How much does this cost?"
               >
                  These projects cost you nothing! Hack4Impact runs on the idea of doing
                  good because it's right. We're also students, so you are paying us in
                  real world experience.
               </question>
            </FAQ>
         </>
      )
   }
}

export default Nonprofits;
