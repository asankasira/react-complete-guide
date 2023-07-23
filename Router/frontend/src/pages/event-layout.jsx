import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";

export const EventLayout = () => {
    return(
        <>
            <EventsNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}