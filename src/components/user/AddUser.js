import {useRef, useState} from "react";
import styles from './AddUser.module.css'
import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
    //Usage of refs with uncontrolled elements
    const userForm = useRef(null);
    const [error, setError] = useState(null);

    const addFormSubmitHandler = (e) => {
        e.preventDefault();

        const userNameInput = userForm.current.querySelector("#userName");
        const userAgeInput = userForm.current.querySelector("#age");

        if (!userNameInput.value.trim() || !userAgeInput.value.trim()) {
            setError({title: "Invalid Inputs", message: "User Name and Age cannot be empty"})
            return;
        }
        if (+userAgeInput.value < 1) {
            setError({title: "Invalid Age", message: "Please enter a valid age (> 0)"})
            return;
        }

        props.onRegisterUser(userNameInput.value, userAgeInput.value);
        userForm.current.reset();
    }

    const addErrorHandler = () => setError(null);

    return (
        <>
            {error && <ErrorModal {...error} onAcknowledge={addErrorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addFormSubmitHandler} ref={userForm}>
                    <label htmlFor={"userName"}>User Name</label>
                    <input id={"userName"} type={"text"} />

                    <label htmlFor={"age"}>Age (Years)</label>
                    <input id={"age"} type={"number"} />
                    <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;