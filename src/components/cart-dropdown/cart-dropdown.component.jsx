import Button from "../button/button.component";
import {useNavigate} from "react-router-dom"
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartDropDownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";

import "./cart-dropdown.styles.jsx"

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const navigate = useNavigate()

    const gotToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                 cartItems.length ?  (cartItems.map((item ) => (
                    <CartItem key={item.id} cartItem={item}></CartItem>
                ))): (
                    <EmptyMessage>Your car is empty.</EmptyMessage>
                )
                }
            </CartItems>
            <Button onClick={gotToCheckoutHandler}>Go to Checkout</Button>
        </CartDropDownContainer>
    )
    
}

export default CartDropdown;