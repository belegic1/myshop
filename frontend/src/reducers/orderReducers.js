import { CREATE_ORDER_DETAILS_FAIL,
     CREATE_ORDER_DETAILS_REQUEST,
      CREATE_ORDER_DETAILS_SUCCESS,
       CREATE_ORDER_FAIL, CREATE_ORDER_PAYMENT_FAIL,
        CREATE_ORDER_PAYMENT_REQUEST, 
        CREATE_ORDER_PAYMENT_SUCCESS, 
        CREATE_ORDER_REQUEST, CREATE_ORDER_RESET, 
        CREATE_ORDER_SUCCESS ,
         CREATE_ORDER_PAYMENT_RESET,
         ORDER_MINE_LIST_REQUEST,
         ORDER_MINE_LIST_FAIL,
         ORDER_MINE_LIST_SUCCESS
    } from "../constants/orderConstants";

export const createOrderReducer = (state={}, action)=>{
    switch(action.type){
        case CREATE_ORDER_REQUEST:
            return{loading: true}
        case CREATE_ORDER_SUCCESS:
            return{loading: false,success: true, order: action.payload}
        case CREATE_ORDER_FAIL:
            return {loading: false, error: action.payload}
        case CREATE_ORDER_RESET:
            return{}
        default:
            return state
    }
}

export const orderDetailsReducer = (state={loading: true}, action)=>{
    switch (action.type) {
        case CREATE_ORDER_DETAILS_REQUEST:
            return {loading: true}
        case CREATE_ORDER_DETAILS_SUCCESS:
            return {loading: false, order: action.payload}
        case CREATE_ORDER_DETAILS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const orderPayReducer = (state={}, action) =>{
    switch(action.type){
        case CREATE_ORDER_PAYMENT_REQUEST: 
        return{loading: true}
        case CREATE_ORDER_PAYMENT_SUCCESS:
            return{loading: false, success: true}
        case CREATE_ORDER_PAYMENT_FAIL:
            return{ loading: false, error: action.payload}
        case  CREATE_ORDER_PAYMENT_RESET:
            return {}
        default: return state
    }
}

export const orderMineListReducer =(state={orders:[]}, action) =>{
    switch (action.type) {
        case ORDER_MINE_LIST_REQUEST:
            return {loading: true}
        case ORDER_MINE_LIST_SUCCESS:
            return {loading: false, orders: action.payload}
        case ORDER_MINE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default: return state
    }
}