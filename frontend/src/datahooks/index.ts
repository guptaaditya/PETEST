import { useEffect, useState } from 'react';

import { Product, ProductCartInfo } from 'types/Products';

const baseApiPath = process.env.REACT_APP_BASE_URI;

export const useProductsList = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [productsList, setProductsList] = useState<Product[]>([]);

    useEffect(() => {
        async function getProductsData() {
            return fetch(`${baseApiPath}/products`)
                .then(r => r.json())
                .catch(e => console.error(e));
        }
        setLoading(true);
        getProductsData().then(setProductsList).finally(() => {
            setLoading(false);
        });
    }, [])
    return {
        loading,
        productsList,
    }
}

export const useCartInformation = (productsSelected: {[key: number]: number}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [productsInformation, setProductsInformation] = useState<ProductCartInfo[]>([]);

    useEffect(() => {
        async function getCartTotal() {
            const productsQuantity = [];
            for (const productId in productsSelected) {
                productsQuantity.push({
                    productId,
                    quantity: productsSelected[productId],
                });
            }
            return fetch(`${baseApiPath}/products/add-to-cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productsQuantity,
                })
            })
                .then(r => r.json())
                .catch(e => console.error(e));
        }
        setLoading(true);
        getCartTotal().then(({productsInformation, grandTotal}) => {
            setTotalAmount(grandTotal);
            setProductsInformation(productsInformation);
        }).finally(() => {
            setLoading(false);
        });
    }, [productsSelected])

    return {
        loading,
        totalAmount,
        productsInformation,
    }
}