export interface ProductItem {
    id: string
    name: string
    price: number
    pic: string
}

export interface CartItem {
    id: string
    name: string
    price: number
    cartId: string
}
export interface ItemProps {
    name: string
    price: number
    pic: string
    id: string
}