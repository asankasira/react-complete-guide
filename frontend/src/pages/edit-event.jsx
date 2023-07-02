import {EventForm} from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

export const EditEvent = () => {
    const data = useRouteLoaderData('event-details')

    return (
        <EventForm event={data.event} method={'patch'}/>
    )
}