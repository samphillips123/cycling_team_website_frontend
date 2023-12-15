const Event = ({ event }) => {
    return (
        <div className='flex'>
            <span>{event.eventDate}</span>
            <span>{event.eventName}</span>
        </div>
    )
}

export default Event