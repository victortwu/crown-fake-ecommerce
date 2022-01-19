import React from 'react' 
import { connect } from 'react-redux' 
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'  

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {  toggleCartHidden } from '../../redux/cart/cart.actions.js' 

import './cart-dropdown.styles.scss'

const CartDropdown = ( { cartItems, history, dispatch } ) => {
    return(
        <AnimatePresence>
            <motion.div 
                className="cart-dropdown"
                key='cart-dropdown'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={ {ease: 'easeInOut'} }
                >
                <div className="cart-items">
                    {cartItems.length ? (
                        cartItems.map(item=> {
                            return <CartItem key={item.id} item={item}/>
                        })
                    ) : (
                        <span className="empty-message">Your cart is empty</span>
                    )}
                </div>
                
                <CustomButton onClick={()=> {
                        history.push('/checkout')
                        dispatch(toggleCartHidden())
                    }
                }
                >
                    GO TO CHECKOUT
                </CustomButton> 
                    
            </motion.div>
        </AnimatePresence>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
   
export default withRouter(connect(mapStateToProps)(CartDropdown))
