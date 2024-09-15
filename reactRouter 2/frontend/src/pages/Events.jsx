import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'event 1'
    },
    {
        id: 'e2',
        title: 'event 2'
    },
]
function EventsPage() {
    return (
        <>
            <ul>

                {DUMMY_EVENTS.map((event) => <li><Link key={event.id} to={`/events/${event.id}`} >{event.title}</Link></li>)}
            </ul>
        </>
    )
}

export default EventsPage;