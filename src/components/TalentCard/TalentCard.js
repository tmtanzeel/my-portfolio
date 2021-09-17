import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import Image from 'react-image-resizer';
import './TalentCard.css';

const TalentCard = (props) => {
    console.log(props.imageSource);
    return (
        <div className="talent-card-container">
            <Card body className="text-center talent-card-wrapper">
                <CardTitle className="heading-text" tag="h5">{props.headingText}</CardTitle>
                <Image className="card-logo" height={100} width={300} src={props.imageSource} alt="logo" />
                <CardText className="subheading-text">{props.subheadingText}</CardText>
                <h4>API Goes here</h4>
                <small className="small-text">{props.smallText}</small>
            </Card>
        </div>
    );
};

export default TalentCard;
