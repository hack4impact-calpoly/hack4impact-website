import {Accordion, Card} from "react-bootstrap";
import styles from "../styles/FAQ.module.scss";

export const FAQ = ({ title, children }) => {
    const Questions = React.Children.map(children, (question, index) => makeQuestion(question, index));

    return (
        <>
        <h2 className={styles.formalize+' '+styles.faqTitle}>Frequently Asked Questions</h2>
        <Accordion className={styles.formalize}>
            { Questions }
        </Accordion>
        </>
    );
};

function makeQuestion(question, index) {
    return (
        <>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={index+1}>
                {question.props.ask}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index+1}>
                <Card.Body>{question.props.children}</Card.Body>
            </Accordion.Collapse>
        </Card>
        </>
    );
}
