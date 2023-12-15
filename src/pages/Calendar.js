import Event from "../components/Event"

const Calendar = (props) => {
    return (
        <div className='flex flex-col absolute top-32 left-10'>
            <h1 className='font-bold text-2xl'>Upcoming Events</h1>
            {props.calendarContent.map((event) => <Event event={event} key={event._id} />)}
        </div>
    )
}

export default Calendar