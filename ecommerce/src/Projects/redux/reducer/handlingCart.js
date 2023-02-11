const cart=[];

const handleCart=(state=cart,action)=>{
    const product=action.payload;
    switch (action.type) {
        // Add Items to Cart
        case "ADDITEM":
            // check if product is alreay exist
            const exist=state.find((x)=>x.id === product.id)
            if(exist){
                //Increse the Quantity
                return state.map((x)=>
                x.id===product.id?{...x,qty:x.qty+1}:x);
            }else{
                const product=action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty:1
                    }
                ]
            }
            break;
             // Item delete from cart
            case "DELITEM":
                const exist1=state.find((x)=>x.id === product.id);
                if(exist1.qty===1){
                    return state.filter((x)=>x.id!== exist1.id);
                }else{
                    return state.map((x)=>
                    x.id===product.id?{...x,qty:x.qty-1}:x
                    );
                }
                
                break;    
        default:
            return state;
            break;
    }
}

export default handleCart;