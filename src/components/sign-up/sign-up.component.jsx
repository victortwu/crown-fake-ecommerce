import React from 'react' 
import { connect } from 'react-redux'

import FormInput from '../collection-item/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/users.actions'

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault()

        const { signUpStart } = this.props
        const { email, displayName, password, confirmPassword } = this.state
        console.log(this.state)
        if ( password !== confirmPassword ) {
            alert("Passwords don't match.")
            return
        }

        signUpStart( { email, displayName, password } )
    }

    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value  })
    }
    
    render() {
        const { email, displayName, password, confirmPassword } = this.state
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account.</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Name'
                        required
                    ></FormInput>

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    ></FormInput>

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    ></FormInput>

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    ></FormInput>
               
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
 
}

const mapDispatchToProps = dispatch => {
    return {
        signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)) 
    }
}

export default connect(null, mapDispatchToProps)(SignUp)

