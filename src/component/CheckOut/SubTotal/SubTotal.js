import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

import './SubTotal.css';
import { useStateValue } from '../../StateProvider/StateProvider';
import { getBasketTotal } from '../../reducer/reducer';

const SubTotal = () => {
    const history = useHistory();
    const [ { basket }, dispatch ] = useStateValue();

    return (
        <div className="subTotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push("/payment")} className="subTotal__CheckoutButton">Proceed to Checkout</button>
        </div>
    );
};

export default SubTotal;