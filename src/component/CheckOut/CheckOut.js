import React from 'react';

import './CheckOut.css';
import SubTotal from './SubTotal/SubTotal';
import CheckOutProduct from './CheckOutProduct/CheckOutProduct';
import { useStateValue } from '../StateProvider/StateProvider';

const CheckOut = () => {
    const [ { basket, user }, dispatch ] = useStateValue();

    return (
        <div className="checkOut">
            <div className="checkOut__left">
                <img 
                    className="checkOut__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="checkOut-ad"
                />
                <div className="checkOut__title">
                    <h4>{user?.email}</h4>
                    <h2>Your Shopping Cart</h2>
                </div>
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
            <div className="checkOut__right">
                <SubTotal />
            </div>
        </div>
    );
};

export default CheckOut;