import React from 'react'
import { motion } from 'framer-motion'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import { containerVariants } from '../../animation-rules/pageVariants.animations'
import './sign-in-and-sign-up-page.styles.scss'

const SignInAndSignUp = () => {

    return(
        <motion.div 
            className="sign-in-and-sign-up"
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
            <SignIn/>
            <SignUp/>
        </motion.div>
    )
}

export default SignInAndSignUp