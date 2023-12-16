import { useMediaQuery } from '../utils/useMediaQuery';
import Event from "../components/Event"

const Calendar = (props) => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div className='m-24'>
            <h1 className='font-bold text-2xl'>Upcoming Events</h1>
            <div className={
                isDesktop
                ? 'flex flex-col justify-center items-start ml-10'
                : 'flex flex-col justify-center items-center'
                }>
                <div>
                    {props.calendarContent
                        .sort((a, b) => a.eventDate > b.eventDate ? 1 : -1)
                        .map((event) => <Event event={event} key={event._id}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Calendar