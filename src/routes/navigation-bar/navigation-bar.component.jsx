import { Outlet } from "react-router-dom"
import { Fragment, useContext} from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation-bar.styles";

const NavigationBar = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    const signOutHandler = async () => {
        await signOutUser()
    }
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
                        (<NavLink as="span" className="nav-link" onClick={signOutHandler}>SIGN OUT</NavLink>
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