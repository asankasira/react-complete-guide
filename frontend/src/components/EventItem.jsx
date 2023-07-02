import classes from './EventItem.module.css';
import {json, Link, redirect, useSubmit} from "react-router-dom";

export const EventItem = ({event}) => {
    const submit = useSubmit()

    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure?')
        proceed && submit({}, {method: 'delete'})
    }

    return (
        <article className={classes.event}>
            <img src={event.image} alt={event.title}/>
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export const action = async ({request, params}) => {
    const eventID = params.eventId
    const response = await fetch(`http://localhost:8080/events/${eventID}`, {method: request.method})

    if (!response.ok) {
        throw json({message: `Unable to delete events data for: ${eventID}`}, {status: 500})
    }

    // return redirect('/events')
    return redirect('..')  //relative url
}