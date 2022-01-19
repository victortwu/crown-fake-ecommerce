import React, { useState } from'react'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/users.actions'


import './sign-in.styles.scss'

const SignIn = () => {
 
    const [userCredentials, setUserCredentials] = useState( { email: '', password: '' } )

    const { email, password } = userCredentials

    const dispatch = useDispatch()

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(email)
        dispatch(emailSignInStart( { email, password } ))
    }

    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }

      return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your mail and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        handleChange={handleChange} 
                        name='email' 
                        type='email' 
                        value={email}
                        label='email' 
                        required
                    />
                  
                    <FormInput 
                        handleChange={handleChange} 
                        name='password' 
                        type='password' 
                        value={password} 
                        label='password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={()=> dispatch(googleSignInStart())} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }

export default SignIn