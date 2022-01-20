import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { AnimatePresence, motion } from 'framer-motion'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/users.selectors'
import { signOutStart } from '../../redux/user/users.actions'  

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { dropdownVariants } from '../../animation-rules/pageVariants.animations'
import { 
        HeaderContainer, 
        LogoContainer, 
        OptionsContainer, 
        OptionLink,
       } from './header.styles'

const Header = ({ currentUser, hidden, signOutStart }) => {
    return(
        <>
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? 
                    <OptionLink to='/' onClick={signOutStart}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink> 
                }
                <CartIcon/>
            </OptionsContainer>
        
        </HeaderContainer>
        <div style={{position: 'absolute', right: '0', zIndex: '1'}}>
            <AnimatePresence>
            {hidden && (<motion.div
                                variants={dropdownVariants}
                                key='cart-dropdown'
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                                >
                            <CartDropdown/>
                        </motion.div>)}
            </AnimatePresence>
        </div>
        </>
    )
}

// This is a NON Redux hooks example utilizing the connect() HOC to pass in props from redux store
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => {
    return {
        signOutStart: ()=> dispatch(signOutStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
                        