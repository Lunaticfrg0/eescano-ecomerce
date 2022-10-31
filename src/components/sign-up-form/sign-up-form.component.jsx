import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!displayName || !email || !password || !confirmPassword ){
            alert("All values should be added")
            return
        }
        if(password !== confirmPassword ) {
            alert("Passwords do not match")
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                alert("Email alredy in use")
            }
            console.log("User created error " +  error)
        }

    }

    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" name="displayName" onChange={handleChange} required value={displayName}/>

                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} required value={email}/>

                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} required value={password}/>
                
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} required value={confirmPassword}/>

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;