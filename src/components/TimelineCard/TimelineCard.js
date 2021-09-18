import './TimelineCard.css';

const TimelineCard = (props) => {
    return (
        <div className="educational-details">
            <h1>{props.content.institute}, {props.content.attended}</h1>
            <h4>{props.content.location}</h4>
            <h4>{props.content.board}</h4>
        </div>
    )
}

export default TimelineCard;