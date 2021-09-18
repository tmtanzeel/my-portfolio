import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-image-resizer';
import './Workexperience-card.css';

const WorkexperienceCard = (props) => {
    return (
        <Container className="workexperience-card-wrapper">

            <Row className="company-intro">
                <h2>
                    {props.companyIntro}
                </h2>
            </Row>
            <Row className="first-row">
                <Col md={4}>
                    <Image className="company-logo" height={100} width={300} src={props.imageSource} alt="logo" />
                </Col>
                <Col md={8} className="work-history">
                    <ul>
                        <li>
                            {props.position}
                        </li>
                        <li>
                            {props.tenure}
                        </li>
                        <li>
                            {props.typeOfEmployee}
                        </li>
                    </ul>
                </Col>
            </Row><br />
            <Row>
                <Col>
                    <h3 className="key-roles-heading">
                        Key roles include:
                    </h3>
                </Col>
            </Row>
            <Row>
                <Col className="key-roles">
                    <ol>
                        <li>
                            Feature development along with Unit testing. Deployment and release.
                        </li>
                        <li>
                            Serving as SwCoE (Software Center of Excellence)
                        </li>
                        <li>
                            Ensuring a clean code base with the help of tools TSLint, Sonar, etc
                        </li>
                    </ol>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkexperienceCard;
