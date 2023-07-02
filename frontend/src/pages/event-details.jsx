import {json, useRouteLoaderData} from "react-router-dom";
import {EventItem} from "../components/EventItem";

export const EventDetails = () => {
    // const params = useParams()
    // const data = useLoaderData();
    const data = useRouteLoaderData('event-details');

    return (
        <EventItem event={data.event}/>
    )
}

export const loader = async ({request, params}) => {
    const eventID = params.eventId
    const response = await fetch(`http://localhost:8080/events/${eventID}`);
    if (!response.ok) {
        throw json({message: `Could not fetch event details for: ${eventID}`}, {status: 500})
    } else {
        return response
    }
}
