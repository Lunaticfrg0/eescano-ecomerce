import Button from "../button/button.component";
import {useNavigate} from "react-router-dom"
import CartItem from "../cart-item/cart-item.component";
import { CartDropDownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles.jsx";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import "./cart-dropdown.styles.jsx"

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
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