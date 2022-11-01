import { useState } from "react";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopUp } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss"

const defaultFormFields = {
    email: '',
    password:'',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!email || !password){
            alert("All values should be added")
            return
        }
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            switch(error.code){
                case "auth/wrong-password":
                    alert("Email or password incorrect")
                    break;
                case "auth/user-not-found":
                    alert("No user associates to email")
                    break;
                default:
                    console.log(error.code)
                    break;
            }
        }

    }

    const signInWithGoogle = async () => {
       await signInWithGooglePopUp();    
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password or Gmail</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" name="email" onChange={handleChange} required value={email}/>

                <FormInput label="Password" type="password" name="password" onChange={handleChange} required value={password}/>
                

               <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button onClick={signInWithGoogle} buttonType="google" type="button">Google sign in </Button>
               </div>
            </form>
        </div>
    )
}

export default SignInForm;