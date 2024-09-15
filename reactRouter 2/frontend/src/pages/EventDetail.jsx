import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams()
    return (
        <>
            <h1>Event id is : {params.eventId}</h1>
        </>
    )
}

export default EventDetailPage;