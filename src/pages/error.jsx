import {MainNavigation} from "../components/main-navigation";

export const ErrorPage = () => {
    return (
        <>
            <MainNavigation/>
            <main>
                <h1>An Error Occurred!</h1>
                <p>Could not find this page!</p>
            </main>
        </>
    )
}