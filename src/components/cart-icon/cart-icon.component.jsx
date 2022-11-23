import "./cart-icon.styles.jsx"
import { ItemCount, CartIconContainer, ShoppingIcon } from "./cart-icon.styles.jsx"
import { useDispatch, useSelector } from "react-redux"

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js"
import { setIsCartOpen } from "../../store/cart/cart.action.js"


const CartIcon = () => {
    const  cartCount = useSelector(selectCartCount)
    const  isCartOpen = useSelector(selectIsCartOpen)

    const dispatch = useDispatch()
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon