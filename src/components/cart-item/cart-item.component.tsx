import { CartItem as CartItemEntity} from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails } from './cart-item.styles';
import { FC, memo } from 'react';

type CartItemProps = {
  cartItem: CartItemEntity
}

const CartItem: FC<CartItemProps> = memo(({cartItem}) => {
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
})

export default CartItem