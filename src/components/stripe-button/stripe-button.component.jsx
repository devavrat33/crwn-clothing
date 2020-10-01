import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HXPGRDv0rUZ3NrddmqvI3YJANX8adJYReigsBZ21A3RniTfJM2wYhidG2QfBfvRT37x1SOZ49px9qxs9OOfuxin00w5tXNnlk';

   const  onToken =token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            img = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}



export default StripeCheckoutButton;