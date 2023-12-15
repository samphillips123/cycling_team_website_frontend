import Event from "../components/Event"

const Calendar = (props) => {
    return (
        <div className='flex flex-col absolute top-32 left-20'>
            <h1 className='font-bold text-2xl'>Upcoming Events</h1>
            <div>
                {props.calendarContent
                    .sort((a, b) => a.eventDate > b.eventDate ? 1 : -1)
                    .map((event) => <Event event={event} key={event._id}
                    />)
                }
            </div>
        </div>
    )
}

export default Calendar