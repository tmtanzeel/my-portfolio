import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-image-resizer';
import './LanguageCard.css';


const LanguageCard = (props) => {

    let localTiles = props.tiles;

    return (
        <div className="languageWrapper" style={{ backgroundColor: props.flowerBgColor }}>
            <h1 className="language-heading-text">{props.cardHeading}</h1>
            {localTiles.map((tile, index) => (

                < Row className="languageRow" >
                    {
                        localTiles[index].map((tile, index) => (
                            < div >
                                <Col key={index} xs={12} sm={3} md={4} lg={1} className="languageCol">
                                    <Image
                                        className="tile-image"
                                        height={100}
                                        width={400}
                                        src={tile.imageSource}
                                        alt="logo"
                                    />
                                    <p className="languageText">{tile.text}</p>
                                </Col>
                            </div>
                        ))
                    }
                </Row>
            ))
            }
        </div >
    );
}

export default LanguageCard;