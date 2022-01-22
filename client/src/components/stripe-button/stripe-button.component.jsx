import React from 'react' 
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { connect } from 'react-redux'
import { clearCart } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ( { price, clearCart } ) => {
    // Stripe needs the USD dollars in cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51KGd9rAZulWTFOukGrp3y5Qr3kKYDnhNmBAjpCcRTDQG7rzsg2PXs1nWLFvcJWpje2hS994qHqeVtbAoIy7QWIsG00WHA3LTOk'

    const onToken = token => {
        console.log(token)
        axios({
            url: 'payment',
            method: 'post',
            data: {
               amount: priceForStripe,
               token 
            }
        }).then(response => {
            console.log(response)
            clearCart()
            setTimeout(()=> {
                alert('Thank you for your pretend purchase!')
            }, 800)
            
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err))
            alert('There was an issue with your payment')
        })
      
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Fake Ecomm Inc.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clearCart: ()=> dispatch(clearCart())
    }
}

export default connect(null, mapDispatchToProps)(StripeCheckoutButton)