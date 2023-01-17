import { ItemCount, CartIconContainer, ShoppingIcon } from "./cart-icon.styles"
import { useDispatch, useSelector } from "react-redux"

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.action"


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