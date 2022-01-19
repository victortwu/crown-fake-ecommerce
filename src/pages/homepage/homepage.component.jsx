import React from 'react'
import { motion } from 'framer-motion'

import Directory from '../../components/directory/directory.component'

import { containerVariants } from '../../animation-rules/pageVariants.animations'
import './homepage.styles.scss'

const HomePage = () => {
    const { visible, hidden, exit } = containerVariants

    console.log(hidden)
    return(
    <motion.div 
        className='homepage'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
        <Directory />
    </motion.div>
    )
}

export default HomePage