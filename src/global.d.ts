export interface ProductItem {
    id: string
    name: string
    price: number
    pic: string
    cart?: any
}

export interface CartItem {
    id: string
    name: string
    price: number
    cartId?: string
    cart: any
}