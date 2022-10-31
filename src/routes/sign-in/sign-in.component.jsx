import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import "./sign-in.styles.scss"
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        createUserDocumentFromAuth(user)
        
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in google</button>
        </div>
    )
};

export default SignIn;