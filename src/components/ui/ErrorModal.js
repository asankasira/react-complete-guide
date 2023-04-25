import React from "react";
import ReactDOM from "react-dom";
import styles from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";

const BackDrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClick}></div>
    )
}

const ModalOverlay = (props) => {
    const {message, title, onAcknowledge} = props;

    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div className={styles.content}>
                <p>{message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={onAcknowledge}>Okay</Button>
            </footer>
        </Card>
    )
}
const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.onAcknowledge}/>, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay {...props}/>, document.getElementById("overlay-root"))}
        </React.Fragment>
    );
}

export default ErrorModal;