export interface Product {
    id: number;
    name: string;
    customerPrice: number;
    cost: number;
}

export interface ProductCartInfo {
    name: string;
    quantity: number;
    price: string;
    totalPrice: string;
}