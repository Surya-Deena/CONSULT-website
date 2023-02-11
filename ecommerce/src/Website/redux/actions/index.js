import { createSlice } from "@reduxjs/toolkit"

export const addItem =(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

export const delItem =(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}
export const minus =()=>{
    return{
        type:"MINUS"
    }
}
export const plus =()=>{
    return{
        type:"ADD"
    }
}

export const user=()=>{
    return{
        type:"USER"
    }
};