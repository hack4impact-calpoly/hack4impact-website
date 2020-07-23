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
               <Event title="Initial Contact" date="Early July">
                  Reach out to our team to get started in our application process!
                  We are interested in hearing about your organization and potential
                  projects you may have in mind.
               </Event>
               <Event title="Project Information" date="Late July / Early August">
                   We will reach out to you to get some specifics about the project
                   you have in mind. Such questions include the use case, potential
                   users, and additional factors that relate to your product.
               </Event>
               <Event title="Director Consoltation" date="September">
                   The board of directors will consider the feasibility of your project
                   and how well it suits our teams and timeline.
               </Event>
               <Event title="Response" date="Late September">
                   We will let you know if we have choosen to take on your project.
                   If we did not take it on this year, please apply again. Since we
                   are also a nonprofit organization, we face many similar resource
                   limitations as you.
               </Event>
            </Timeline>

            <FAQ>
               <question ask="What types of projects do you undertake?">
                  Most of the projects we undertake are web applications. Common examples
                  of problems we tackle include volunteer tracking forms, member directories,
                  and data tracking softwares. Check out our <Link href="/projects"><a>projects
                  page</a></Link> to see some of our previous work, and feel free to contact
                  us with any project ideas!
               </question>
               <question ask="How much does this cost?">
                  These projects are free or low cost ($5- $15 / month) for the website
                  and hosting expenses. We are building software to better help you
                  serve your community, and we know how tight money can be so we try to
                  keep these expenses as low as possible.
               </question>
               <question ask="What does the project timeline look like?">
                  Most development begins at the start of the new year and continues
                  until around mid-April. Throughout all of this, we will remain in
                  constant contact with you to ensure that we are building an application
                  that you will want to use.
               </question>
               <question ask="How much involvement is expected from nonprofits?">
                  We strongly believe in continuous and transparent communication to ensure
                  that your project is something that you will be happy with. This means we
                  will be asking for constant feedback throughout the development cycle,
                  including check-ins and surveys.
               </question>
               <question ask="How does long term maintence work?">
                  Once we hand the product off to you around mid-April, we want to give you time
                  to experiment with it and find anything that needs to be changed. Once we end
                  our school year in mid-June, we will no longer be able to make additions as easily
                  due to limited resources on our end. If you encounter bugs on the site, we will
                  attempt to correct these issues, but cannot guarantee that we will be able to.
               </question>
            </FAQ>
         </>
      )
   }
}

export default Nonprofits;
