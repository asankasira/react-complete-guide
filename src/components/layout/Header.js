import styles from './Header.module.css'
import mealsImg from '../../assets/melas.png'
import {HeaderCartButton} from "./HeaderCartButton";

export const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onCartShow}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImg}  alt={"Cart of delicious food"}/>
            </div>
        </>
    )
}

