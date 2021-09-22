import './TextStripCard.css';

const TextStripCard = (props) => {
    return (
        <div className="textCardWrapper" style={{ backgroundColor: props.textStripBgColor, color: props.textStripTextColor }}>
            <h1 className="textCardHeading">{props.textStripHeading}</h1>
            <h1 className="textCardSubHeading">{props.textStripSubHeading}</h1>
        </div >
    )
}
export default TextStripCard;