import {useReducer} from "react";
import {CartContext} from "./cart-context";

const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    let updatedItems = [...state.items]; //make a new copy
    let prevItemIndex;

    switch (action.type) {
        case 'ADD':
            prevItemIndex = state.items.findIndex(item => action.item.id === item.id);
            if (prevItemIndex > -1) {
                let prevItem = state.items[prevItemIndex];
                prevItem = {...prevItem, amount: prevItem.amount + action.item.amount};
                updatedItems[prevItemIndex] = prevItem;
            } else {
                updatedItems = [...updatedItems, action.item]
            }

            const updatedAmount = state.totalAmount + (action.item.price * action.item.amount);
            return {items: updatedItems, totalAmount: updatedAmount};

        case 'REMOVE':
            prevItemIndex = state.items.findIndex(item => action.id === item.id);
            let prevItem = state.items[prevItemIndex];
            if (prevItem.amount === 1) {
                updatedItems = updatedItems.filter(item => item.id !== prevItem.id);
            } else {
                prevItem = {...prevItem, amount: prevItem.amount - 1}
                updatedItems[prevItemIndex] = prevItem;
            }
            return {items: updatedItems, totalAmount: (state.totalAmount - prevItem.price)};

        case 'CLEAR':
        default:
            return initialCartState;
    }
}

export const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState, undefined);

    const addCartItemHandler = (item) => {
        dispatchCartAction({type: 'ADD', item});
    };
    const removeCartItemHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id})
    };

    const clearCartItems = () => dispatchCartAction({type: 'CLEAR'});

    const cartCtx = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addCartItemHandler,
        removeItem: removeCartItemHandler,
        clearItems: clearCartItems
    }

    return (
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
    )
}