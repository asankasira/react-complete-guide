import {useState} from "react";
import {CartProvider} from "./store/cart-provider";
import {Header} from "./components/layout/Header";
import {Meals} from "./components/meals/Meals";
import {Cart} from "./components/cart/Cart";

function App() {
    const [isCartShow, setCartShow] = useState(false);

    const showCartHandler = () => setCartShow(true);
    const hideCharHandler = () => setCartShow(false);

    return (
        <CartProvider>
            {isCartShow && <Cart onCartHide={hideCharHandler}/>}
            <Header onCartShow={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
