import {Link, useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('products') //programmatically  navigating
    }

    return (
        <>
            <h1>My Home Page</h1>
            <p>
              Go to <Link to={'products'}>list of products</Link>
            </p>
            <button onClick={navigateHandler}>Navigate</button>
        </>
    )
}