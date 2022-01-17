import React from'react'
import { connect } from 'react-redux'

import FormInput from '../collection-item/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { googleSignInStart, emailSignInStart } from '../../redux/user/users.actions'


import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           email: '',
           password: '', 
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        const { emailSignInStart } = this.props
        const { email, password } = this.state
      
        emailSignInStart(email, password)
    }

    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {
        const { googleSignInStart } = this.props
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        label='email' 
                        required
                    />
                  
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
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
}

const mapDispatchToProps = dispatch => {
    return {
       googleSignInStart: ()=> dispatch(googleSignInStart()),
       emailSignInStart: (email, password)=> dispatch(emailSignInStart({ email, password })) 
    }
}

export default connect(null, mapDispatchToProps)(SignIn)