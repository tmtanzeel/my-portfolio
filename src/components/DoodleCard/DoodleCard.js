import { Row, Col } from 'react-bootstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import Image from 'react-image-resizer';
import './DoodleCard.css';

const DoodleCard = (props) => {
    return (
        <div>
            <Card body className="text-center">
                <CardTitle className="heading-text" tag="h5">{props.doodleHeadingText}</CardTitle>
                <Row>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource1} alt="logo" />
                    </Col>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource5} alt="logo" />

                    </Col>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource2} alt="logo" />
                    </Col>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource5} alt="logo" />

                    </Col>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource3} alt="logo" />
                    </Col>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource5} alt="logo" />

                    </Col>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource5} alt="logo" />

                    </Col>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource6} alt="logo" />
                    </Col>
                    <Col>
                        <Image className="card-logo" height={100} width={300} src={props.doodleImageSource4} alt="logo" />

                    </Col>
                </Row>
                <CardText className="subheading-text">{props.subheadingText}</CardText>
            </Card>
        </div>
    )
}

export default DoodleCard;