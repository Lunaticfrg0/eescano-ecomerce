import { CartItem as CartItemEntity} from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

type CartItemProps = {
  cartItem: CartItemEntity
}

const CartItem = ({cartItem} : CartItemProps) => {
    const {name, price, quantity, imageUrl } = cartItem
    return (
        <CartItemContainer>
          <img src={imageUrl} alt={`${name}`}/>
          <ItemDetails>
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
          </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem