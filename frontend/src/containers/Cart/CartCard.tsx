import React from 'react';
import { ProductCartInfo } from 'types/Products';

import { CartCardStyle } from './CartStyles';

const CartCard = (props: ProductCartInfo) => {
    const { name, quantity, price, totalPrice } = props;

    return (
        <CartCardStyle>
            <div>Name: <b>{name}</b></div>
            <div>Quantity: <b>{quantity}</b></div>
            <div>Price: <b>{price}</b></div>
            <div>Total Price: <b>{totalPrice}</b></div>
        </CartCardStyle>
    )
}

export default CartCard;