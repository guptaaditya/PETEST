import React from 'react';
import { useProductsList } from 'datahooks';
import Cart from 'containers/Cart';

import ProductCard from './ProductCard';
import {ProductStyles, ViewCart} from './ProductStyles';
import { useState } from 'react';

export const ProductsList: React.FC = () => {
    const [ isCartVisible, setCartVisible ] = useState(false);
    const { loading, productsList } = useProductsList();

    const [ productsSelected, setProductsSelected ] = useState<{[id: number]: number}>({});

    const handleIncrement = React.useCallback((productId) => {
        setProductsSelected(products => {
            const productQuantity = products[productId] ?? 0;
            return {
                ...products,
                [productId]: productQuantity+1,
            }
        });
    }, []);
    const handleDecrement = React.useCallback((productId) => {
        setProductsSelected(products => {
            const productQuantity = products[productId] ?? 0;
            return {
                ...products,
                [productId]: productQuantity-1,
            }
        });
    }, []);

    const handleViewCart = React.useCallback(() => {
        setCartVisible(true);
    }, []);

    const handleOnCartClose = React.useCallback(() => {
        setCartVisible(false);
    }, []);

    const hasProductsSelected = Boolean(Object.values(productsSelected).find(quantity => quantity > 0));
    
    return (
        <ProductStyles>
            <div>
                {loading && `Loading products...`}
                {!loading && productsList?.length === 0 && `No products found`}
                {!loading && productsList?.length > 0 && <h3>Products List</h3>}
            </div>            
            <div className="products-list">
                {productsList.map(product => (
                    <ProductCard 
                        key={product.id} 
                        {...product} 
                        quantity={productsSelected[product.id] ?? 0}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                ))}
            </div>
            <ViewCart onClick={handleViewCart} isVisible={hasProductsSelected && !isCartVisible}>View Cart</ViewCart>
            {isCartVisible && (
                <Cart
                    onClose={handleOnCartClose}
                    productsSelected={productsSelected} 
                />
            )}
        </ProductStyles>
    )
};

export default ProductsList;
