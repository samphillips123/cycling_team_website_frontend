import Event from "../components/Event"

const Calendar = (props) => {
    return props.content.map((event) => <Event event={event} key={event._id} />)
}

export default Calendar