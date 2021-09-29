import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import pdf from "./Tanzeel_Mirza_Resume.pdf"


const Footer = (props) => {
    let localArrayLink = props.footerLinks;
    console.log(localArrayLink);
    return (
        <div className="footerWrapper" style={{ backgroundColor: props.footerBgColor, color: props.footerTextColor }}>
            <p className="footerHeading">{props.footerHeading}</p>
            <p className="footerSubHeading">{props.footerSubHeading}</p>
            <a href={pdf} download>Feel free to go through my resume</a>
            <br /><br />

            <div className="linkRow">
                {
                    localArrayLink.map((link, index) => (

                        <span key={index} className="eachLink">
                            <a href={link.link} className="linkIcon" target="_blank"><i className={link.icon} /></a>
                        </span>

                    ))
                }
            </div>
        </div>
    )
}

export default Footer;