import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";
import {NewsLetterSignup} from "./NewsLetterSignup";

function MainNavigation() {
    const getLinkClasses = ({isActive}) => isActive ? classes.active : ''

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={getLinkClasses} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className={getLinkClasses}>
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/newsletter" className={getLinkClasses}>
                            Newsletter
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <NewsLetterSignup />
        </header>
    );
}

export default MainNavigation;
