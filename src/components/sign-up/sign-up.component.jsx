import React, { useState } from 'react' 
import { connect } from 'react-redux'

import FormInput from '../collection-item/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/users.actions'

import './sign-up.styles.scss'

const SignUp = ( { signUpStart } ) =>  {
   
    const [userCredentials, setUserCredentials] = useState( 
        {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
     )

    
     const { email, displayName, password, confirmPassword } = userCredentials

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        if ( password !== confirmPassword ) {
            alert("Passwords don't match.")
            return
        }

        signUpStart( { email, displayName, password } )
    }

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setUserCredentials({ ...userCredentials, [name]: value  })
    }
    
   
      
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account.</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={handleSubmit} className="sign-up-form">
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Name'
                        required
                    ></FormInput>

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    ></FormInput>

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    ></FormInput>

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    ></FormInput>
               
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
 


const mapDispatchToProps = dispatch => {
    return {
        signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)) 
    }
}

export default connect(null, mapDispatchToProps)(SignUp)

