import { useState, FormEvent, ChangeEvent } from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
    email: '',
    password:'',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;
    const dispatch = useDispatch();

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!email || !password){
            alert("All values should be added")
            return
        }
        try {
            dispatch(emailSignInStart(email, password))
            resetFormFields()
        } catch (error) {
            console.log(error)
        }

    }

    const signInWithGoogle = async () => {
       dispatch(googleSignInStart())    
    }

    return(
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
            />
    
            <FormInput
                label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
            />
            <ButtonsContainer>
                <Button type='submit'>Sign In</Button>
                <Button
                buttonType={BUTTON_TYPE_CLASSES.google}
                type='button'
                onClick={signInWithGoogle}
                >
                Sign In With Google
                </Button>
            </ButtonsContainer>
            </form>
      </SignInContainer>
    )
}

export default SignInForm;