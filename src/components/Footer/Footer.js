import './Footer.css';
import { Row, Col } from 'react-bootstrap';


const Footer = (props) => {
    let localArrayLink = props.footerLinks;
    console.log(localArrayLink);
    return (
        <div className="footerWrapper" style={{ backgroundColor: props.footerBgColor, color: props.footerTextColor }}>
            <p className="footerHeading">{props.footerHeading}</p>
            <p className="footerSubHeading">{props.footerSubHeading}</p>
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