import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
  } from './product-card.styles';import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';


const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    const {name, price, imageUrl} = product;
    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <Footer className='footer'>
                <Name >{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCartContainer>
    )
}
export default ProductCard;