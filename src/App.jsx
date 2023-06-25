import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/home";
import {Products} from "./pages/products";
import {RootLayout} from "./pages/root-layout";
import {ErrorPage} from "./pages/error";
import {ProductDetails} from "./pages/product-details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [ //switched to relative paths
            {path: '', element: <Home/>},
            {path: 'products', element: <Products/>},
            {path: 'products/:id', element: <ProductDetails/>}
        ]
    }
])

//createRoutesFromElements is the older way

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
