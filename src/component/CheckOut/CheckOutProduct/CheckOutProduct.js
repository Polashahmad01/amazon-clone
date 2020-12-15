import React from 'react';

import './CheckOutProduct.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const CheckOutProduct = ({ id, image, title, price, rating, hideButton }) => {
    const [ { basket }, dispatch ] = useStateValue();

    const removeFromBasker = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    };

    return (
        <div className="checkOutProduct">
            <img className="checkOutProduct__image" src={image} alt={title} />
            <div className="checkOutProduct__info">
                <p className="checkOutProduct__title">{title}</p>
                <p className="checkOutProduct__price">
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkOutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasker}>Remove from Cart</button>
                )}
            </div>
        </div>
    );
};

export default CheckOutProduct;