//for add items to cart
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
}
}

// for delete from cart items
export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}