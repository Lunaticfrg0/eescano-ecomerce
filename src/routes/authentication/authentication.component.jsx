import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
    signInWithGooglePopUp, 
    createUserDocumentFromAuth,
     } from "../../utils/firebase/firebase.utils"

import "./authentication.styles.scss"

const Authentication = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user)    
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in google</button>
            <SignUpForm/>
        </div>
    )
};

export default Authentication;