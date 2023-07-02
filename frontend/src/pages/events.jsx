import {EventsList} from '../components/EventsList';
import {useLoaderData, json} from "react-router-dom";

export const Events = () => {
    const data = useLoaderData()
    return (
        <EventsList events={data.events}/>
    )
}

export const fetchEvents = async () => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // throw new Response(JSON.stringify({message: 'Could not fetch data'}), {status: 500})
        throw json({message: 'Could not fetch data'}, {status: 500})
    } else {
        return response
    }
}