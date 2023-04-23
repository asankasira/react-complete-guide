import {useState} from "react";
import styles from './AddUser.module.css'
import Card from "../ui/Card";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";

const AddUser = (props) => {
    const [userInputName, setUserInputName] = useState('');
    const [inputAge, setUserInputAge] = useState('');
    const [error, setError] = useState(null);

    const addFormSubmitHandler = (e) => {
        e.preventDefault();
        if (!userInputName.trim() || !inputAge.trim()) {
            setError({title: "Invalid Inputs", message: "User Name and Age cannot be empty"})
            return;
        }
        if (+inputAge < 1) {
            setError({title: "Invalid Age", message: "Please enter a valid age (> 0)"})
            return;
        }

        props.onRegisterUser(userInputName, inputAge);
        setUserInputName('');
        setUserInputAge('');
    }

    const addErrorHandler = () => setError(null);

    return (
        <div>
            {error && <ErrorModal {...error} onAcknowledge={addErrorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addFormSubmitHandler}>
                    <label htmlFor={"userName"}>User Name</label>
                    <input id={"userName"} type={"text"} value={userInputName}
                           onChange={e => setUserInputName(e.target.value)}/>
                    <label htmlFor={"age"}>Age (Years)</label>
                    <input id={"age"} type={"number"} value={inputAge} onChange={e => setUserInputAge(e.target.value)}/>
                    <Button type={"submit"}>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;