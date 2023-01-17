import { Outlet } from "react-router-dom"
import { Fragment} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation-bar.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from '../../store/user/user.action';

const NavigationBar = () => {
    const currentUser =  useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    const dispatch =  useDispatch() 
    const signOutUser = () => dispatch(signOutStart());
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinks>
                <NavLink to="/shop">
                    SHOP
                </NavLink>
                {
                    currentUser ? 
                        (<NavLink as="span" className="nav-link" onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : 
                        (<NavLink to="/auth">
                            SIGN IN
                        </NavLink>) 
                }
                <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
}
export default NavigationBar;