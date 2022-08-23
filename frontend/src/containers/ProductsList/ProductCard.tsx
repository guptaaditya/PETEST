import React from 'react';
import Button from 'components/Button';
import { Product } from 'types/Products';

import { 
    ProductContainer, 
    ProductName, 
    ProductSelector, 
    ProductQuantity,
    StyledButton
} from './ProductStyles';

type ProductCountChanger = (id: number) => void;
interface ProductSelectors {
    quantity: number;
    onIncrement: ProductCountChanger;
    onDecrement: ProductCountChanger;
};

const ProductCard = (props: Product & ProductSelectors) => {
    const { id, name, onIncrement, onDecrement, quantity = 0 } = props;

    const handleIncrementer = React.useCallback(() => {
        onIncrement(id);
    }, [id, onIncrement]);

    const handleDecrementer = React.useCallback(() => {
        onDecrement(id);
    }, [id, onDecrement]);


    return (
        <ProductContainer>
            <ProductName>{name}</ProductName>
            <ProductSelector>
                <Button onClick={handleIncrementer}>{'+'}</Button>
                <ProductQuantity>{quantity}</ProductQuantity>
                <StyledButton onClick={handleDecrementer} isVisible={quantity > 0}>{'-'}</StyledButton>
            </ProductSelector>
        </ProductContainer>
    )
}

export default ProductCard;