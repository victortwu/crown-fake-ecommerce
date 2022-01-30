import { AnimatePresence, motion } from 'framer-motion'
import React from 'react' 
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'


import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors'
import { clearCart } from '../../redux/cart/cart.actions'

import './checkout.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component'

const CheckoutPage = ( { cartItems, total, clearCart } ) => {
    return(
        <div className="checkout-page">
           <div className="checkout-header">
               <div className="header-block">
                   <span>Product</span>
               </div>
               <div className="header-block">
                   <span>Description</span>
               </div>
               <div className="header-block">
                   <span>Quantity</span>
               </div>
               <div className="header-block">
                   <span>Price</span>
               </div>
               <div className="header-block">
                   <span>Remove</span>
               </div>
           </div>
            <AnimatePresence>
           {
               cartItems.map(cartItem=> {
                   return <motion.div className='checkout-item-container' key={cartItem.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                            </motion.div>
               })
           }
           </AnimatePresence>
           <div className="total">
               <span>TOTAL: ${total}</span>
           </div>
         
           <div className="test-warning">
               Please use the following TEST credit card for payments
               <br/>
               4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
           </div>
           <StripeCheckoutButton price={total} />
           <CustomButton onClick={clearCart}>
               Clear Cart
           </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const mapDispatchToProps = dispatch => {
    return {
        clearCart: ()=> dispatch(clearCart())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage)