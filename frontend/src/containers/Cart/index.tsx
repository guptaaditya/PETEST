import React from 'react';
import { useCartInformation } from 'datahooks';
import { CartContainer, CartInformation, GrandTotal, CloseCart } from './CartStyles';
import CartCard from './CartCard';

interface CartProps {
    productsSelected: {[key: number]: number};
    onClose: () => void;
}

const Cart = (props: CartProps) => {
    const { 
        loading,
        totalAmount,
        productsInformation,
    } = useCartInformation(props.productsSelected);

    return (
        <CartContainer>
            <div>
                {loading && `Please wait! Cart is being prepared...`}
                {!loading && productsInformation?.length > 0 && <h3>Products total</h3>}
            </div>
            <CartInformation>
                {productsInformation && productsInformation.map((productInfo, index) => (
                    <CartCard
                        key={index}
                        {...productInfo}
                    />
                ))}
            </CartInformation>
            <GrandTotal>Grand Total: <b>{totalAmount}</b></GrandTotal>
            <CloseCart onClick={props.onClose}>Close</CloseCart>
        </CartContainer>
    );
};

export default Cart;
