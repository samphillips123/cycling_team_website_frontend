import Event from "../components/Event"

const Calendar = (props) => {
    return props.pageContent.map((event) => <Event event={event} key={event._id} />)
}

export default Calendar