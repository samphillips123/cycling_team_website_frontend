const Event = ({ event }) => {
    return (
        <div>
            <h3>{event.eventName}</h3>
            <h4>{event.eventDate}</h4>
        </div>
    )
}

export default Event