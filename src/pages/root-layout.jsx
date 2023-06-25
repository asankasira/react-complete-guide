import {Outlet} from "react-router-dom";
import {MainNavigation} from "../components/main-navigation";

export const RootLayout = () => {
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}