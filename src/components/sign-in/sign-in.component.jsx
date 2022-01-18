import React, { useState } from'react'
import { connect } from 'react-redux'

import FormInput from '../collection-item/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/users.actions'


import './sign-in.styles.scss'

const SignIn = ( { emailSignInStart, googleSignInStart } ) => {
 
    const [userCredentials, setUserCredentials] = useState( { email: '', password: '' } )

    const { email, password } = userCredentials

    const handleSubmit = async(e) => {
        e.preventDefault()
        emailSignInStart(email, password)
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
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => {
    return {
       googleSignInStart: ()=> dispatch(googleSignInStart()),
       emailSignInStart: (email, password)=> dispatch(emailSignInStart({ email, password })) 
    }
}

export default connect(null, mapDispatchToProps)(SignIn)