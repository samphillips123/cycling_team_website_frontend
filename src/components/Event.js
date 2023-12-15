const Event = ({ event }) => {
    return (
        <div className='mt-5 border-t-2 border-black'>
            <div className='m-5 text-xl hover:cursor-pointer'>
                <a href={event.eventUrl} target='_blank'>
                    <span>{event.eventDate} {event.eventName} - {event.eventLocation}</span>
                </a>
            </div>
        </div>
    )
}

export default Event