import React from 'react';

import './Product.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
    const [ { basket }, dispatch ] = useStateValue();

    const addToBasker = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }, 
        });
    };

    return (
        <div className="product" key={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$ </small>
                    <small>{ price}</small>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
            </div>
            <img 
                src={image}
                alt="hp-monitor"
            />
            <button onClick={addToBasker}>Add to Cart</button>
        </div>
    );
};

export default Product;