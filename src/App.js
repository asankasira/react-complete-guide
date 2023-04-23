import {useState} from "react";
import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";

export default function App () {
    const[regUsers, setRegUsers] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setRegUsers((prevUsers) => [...prevUsers, {id: Math.random().toString(36).slice(2), name: uName, age: uAge}])
    }

    return (
        <div>
            <AddUser onRegisterUser={addUserHandler}/>
            <UserList users={regUsers}/>
        </div>
    )
}