import {EventsList} from '../components/EventsList';
import {useLoaderData, json, defer, Await} from "react-router-dom";
import {Suspense} from "react";

export const Events = () => {
    const {events} = useLoaderData()
    // return (
    //     <EventsList events={data.events}/>
    // )
    return (
        <Suspense fallback={<p style={{textAlign: "center"}}>Loading Events ....</p>}>
            <Await resolve={events}>
                {(loadEvents) => <EventsList events={loadEvents}/>}
            </Await>
        </Suspense>
    )
}

const loadEvents = async() => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({message: 'Could not fetch data'}, {status: 500})
    } else {
        const resData = await response.json()
        return resData.events;
    }
}

export const action = () => {
    return defer({
        events: loadEvents()
    })
}