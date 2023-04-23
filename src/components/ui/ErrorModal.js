import styles from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
    const {message, title, onAcknowledge} = props;

    return (
        <div>
            <div className={styles.backdrop} onClick={onAcknowledge}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={onAcknowledge}>Ok</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;