import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Hlet9ACmjVzUWhfdAZbTKABiTGLa94Lp8Z615hLeByv13N8PXTvhSlqUMuZ7TZPXWZEnXOBkJt5SZy8HXBNXNpu00RijGZPPm";

    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Eastox"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            price={priceForStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;