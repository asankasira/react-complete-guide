import styles from './UserList.module.css'
import Card from "../ui/Card";

const UserList = (props) => {
    return (
        props.users.length &&
        <Card className={styles.users}>
            <ul>
                {props.users.map(u => <li key={u.id}>{u.name} ({u.age} years old)</li>)}
            </ul>
        </Card>
    )
}

export default UserList;