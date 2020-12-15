import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

import './Payment.css';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckOutProduct from '../CheckOut/CheckOutProduct/CheckOutProduct';
import { getBasketTotal } from '../reducer/reducer';
import axios from '../axios/axios';
import { db } from '../Firebase/Firebase'


const Payment = () => {
    const history = useHistory();
    const [ { basket, user }, dispatch ] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [ error, setError ] = useState(null);
    const [ disabled, setDisabled ] = useState(true);

    const [ succeeded, setSucceeded ] = useState(false);
    const [ processing, setProcessing ] = useState("");

    const [ clientSecret, setClientSecret ] = useState(true);

    useState(() => {
        // Client Secret
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })

            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket]);

    console.log('THE SECRET IS >>>>>>>', clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Stripe
        setProcessing(true);

        // const payload = await stripe
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // PaymentIntent = payment confirmation
            const data = {
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            }

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set(data)

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout {basket?.length} items
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Main Street Lane</p>
                        <p>San Francisco, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckOutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                                {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;