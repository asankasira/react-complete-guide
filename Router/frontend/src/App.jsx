import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/home";
import {Events, action as fetchEvents} from "./pages/events";
import {EventDetails, loader as eventDetailsLoader} from "./pages/event-details";
import {NewEvent} from "./pages/new-event";
import {action as deleteEventAction} from "./components/EventItem";
import {action as upsertEventAction} from "./components/EventForm";
import {action as newsletterAction} from "./pages/news-letter-page";
import {EditEvent} from "./pages/edit-event";
import {RootLayout} from "./pages/root-layout";
import {EventLayout} from "./pages/event-layout";
import {ErrorPage} from "./pages/error-page";
import {NewsLetterPage} from "./pages/news-letter-page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {
                path: 'events',
                element: <EventLayout/>,
                children: [
                    {path: '', element: <Events/>, loader: fetchEvents},
                    {path: 'new', element: <NewEvent/>, action: upsertEventAction},
                    {
                        path: ':eventId',
                        id: 'event-details',
                        loader: eventDetailsLoader,
                        children: [
                            {index: true, element: <EventDetails/>, action: deleteEventAction},
                            {path: 'edit', element: <EditEvent/>, action: upsertEventAction}
                        ]
                    }
                ]
            },
            {
                path: 'newsletter',
                element: <NewsLetterPage/>,
                action: newsletterAction,
            },
        ]
    }
])

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
