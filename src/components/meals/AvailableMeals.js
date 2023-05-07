import styles from './AvailableMeals.module.css'
import {MealItem} from "./mealItem/MealItem";
import {Card} from "../ui/Card";
import {useEffect, useState} from "react";

export const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const res = await fetch("https://react-http-7414c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
            return await res.json();
        }

        fetchMeals()
            .then(data => {
                setMeals(Object.entries(data).map(([k, v]) => ({id: k, ...v})));
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                setHttpError(err.message)
            });
    }, []);

    if(isLoading) {
        return (
            <section className={styles.mealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if(httpError) {
        return (
            <section className={styles.mealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {meals.map(meal => <MealItem key={meal.id} {...meal}/>)}
                </ul>
            </Card>
        </section>
    )
}