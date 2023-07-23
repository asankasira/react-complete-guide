import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";

function MainNavigation() {

    const getlinkclasses = ({isActive}) => isActive ? classes.active : ''

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to={'/'} className={getlinkclasses}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'events'} className={getlinkclasses}>Events</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
