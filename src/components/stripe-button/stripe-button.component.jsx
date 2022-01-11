import React from 'react' 
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ( { price } ) => {
    // Stripe needs the USD dollars in cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51KGd9rAZulWTFOukGrp3y5Qr3kKYDnhNmBAjpCcRTDQG7rzsg2PXs1nWLFvcJWpje2hS994qHqeVtbAoIy7QWIsG00WHA3LTOk'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
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

export default StripeCheckoutButton