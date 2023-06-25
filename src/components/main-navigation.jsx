import {NavLink} from "react-router-dom";
import styles from './main-navigation.module.css'

export const MainNavigation = () => {

    const getLinkClass = ({isActive}) => isActive ? styles.active : ''

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    {/*<li><Link to={"/"}>Home</Link></li>*/}
                    {/*<li><Link to={"/products"}>Products</Link></li>*/}
                    <li><NavLink to={"/"} className={getLinkClass}>Home</NavLink></li>
                    <li><NavLink to={"/products"} className={getLinkClass}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}