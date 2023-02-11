const addItem=[];

export const addItems=(state=addItem,action)=>{
    switch(action.type){
        case "ADDITEM":
            return [
            ...state,
            action.payload]
        break;
        case "DELITEM":
            return state=state.filter((x)=>{
                return x.id !== action.payload.id;
            })
            break;
       
            default: return state;
            break;
        }
    }

  export  const   counts =(state=1,action)=>{
        switch(action.type){
        case "MINUS":
            return state-1
            break;
        case "ADD":
            return state+1
            break;
            default: return state;
            break;
        }
    }   
