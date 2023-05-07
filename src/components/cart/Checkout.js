import styles from './Checkout.module.css';

export const Checkout = (props) => {

    const confirmHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = Object.fromEntries(formData.entries())
        props.onConfirm(userData);
    };

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={styles.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' name='name' />
            </div>
            <div className={styles.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' name='street' />
            </div>
            <div className={styles.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' name='postal' />
            </div>
            <div className={styles.control}>
                <label htmlFor='city'>City</label>
                <input type='text' name='city' />
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
};
