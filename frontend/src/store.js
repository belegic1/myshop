
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers'
import { createOrderReducer, orderDetailsReducer, orderMineListReducer, orderPayReducer } from './reducers/orderReducers'
import { productDetailReducer, productListReducer } from './reducers/productReducers'
import { userDetailsReducer, userRegisterReducer, userSigninReducer, userUpdateProfileReducer } from './reducers/userReducer'



const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ?
            JSON.parse(localStorage.getItem('cartItems')): [],
        shippingAddress: localStorage.getItem('shippingAddress') ?
            JSON.parse(localStorage.getItem('shippingAddress')): {},
        paymentMethod: 'PayPal'
    },
    userSignin: {
        userInfo: localStorage.getItem('userInfo')?
        JSON.parse(localStorage.getItem('userInfo')): {}
    },
   
}

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: createOrderReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList:  orderMineListReducer,
    userDetails: userDetailsReducer,
     userUpdateProfile:  userUpdateProfileReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, 
    composeEnhancer(applyMiddleware(thunk)))

export default store