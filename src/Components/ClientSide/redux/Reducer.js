export const initialState = {
    cart: {}
}


export const Reducer = (state = initialState,  action) => {
    switch(action.type){
        case 'ADD_ITEM': 
            state.cart[action.payload[0]]=action.payload[1]
            return {cart: state.cart};
        case 'REMOVE_ITEM':
            delete state.cart[action.payload[0]]
            return {cart: state.cart}
        default: 
            return {cart: state.cart}
    }
}