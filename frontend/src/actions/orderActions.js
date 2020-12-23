import {CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL,
    CREATE_ORDER_DETAILS_REQUEST, CREATE_ORDER_DETAILS_SUCCESS,
    CREATE_ORDER_DETAILS_FAIL,
    CREATE_ORDER_PAYMENT_REQUEST,
    CREATE_ORDER_PAYMENT_SUCCESS,
    CREATE_ORDER_PAYMENT_FAIL,
    ORDER_MINE_LIST_REQUEST,
    ORDER_MINE_LIST_FAIL,
    ORDER_MINE_LIST_SUCCESS
}
from '../constants/orderConstants'
import axios from 'axios'
import { CART_EMPTY } from '../constants/cartConstants'


export const createOrder = (order)=> async (dispatch, getState) => {
    dispatch({type: CREATE_ORDER_REQUEST, payload: order})
    try {
        const {userSignin: {userInfo}} = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post('/api/orders', order,config)
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data.order})
        dispatch({type: CART_EMPTY})
        localStorage.removeItem('cartItems')
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}

export const detailsOrder = (orderId)=> async (dispatch, getState) =>{
    dispatch({type: CREATE_ORDER_DETAILS_REQUEST,
         payload: orderId})
         try {
             const {userSignin: {userInfo}} = getState()
             const config = {
                 headers: {
                     'Content-Type': 'application/json',
                     Authorization: `Bearer ${userInfo.token}`
                 }
             }
             const {data} = await axios.get(`/api/orders/${orderId}`, config)
             dispatch({type:CREATE_ORDER_DETAILS_SUCCESS, payload: data})
         } catch (error) {
             dispatch({
                 type: CREATE_ORDER_DETAILS_FAIL,
                 payload: error.response && error.response.data.message ?
                 error.response.data.message : error.message
             })
         }
}

export const payOrder =(order,paymentResult) =>async(dispatch, getState)=>{
    dispatch({type:CREATE_ORDER_PAYMENT_REQUEST, payload: {order,paymentResult}})
    try {
        const {userSignin: {userInfo}} = getState()
        const config ={
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post(`/api/orders/${order._id}/pay`,
        paymentResult, config)
        dispatch({type: CREATE_ORDER_PAYMENT_SUCCESS, payload: data})
    } catch (error) {
         dispatch({
                 type: CREATE_ORDER_PAYMENT_FAIL,
                 payload: error.response && error.response.data.message ?
                 error.response.data.message : error.message
             })
    }
}

export const listOrderMine = () => async(dispatch, getState)=>{
    dispatch({type:ORDER_MINE_LIST_REQUEST})
    try {
        const {userSignin: {userInfo}} = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get('/api/orders/mine', config)
        dispatch({type:ORDER_MINE_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({
                 type: ORDER_MINE_LIST_FAIL,
                 payload: error.response && error.response.data.message ?
                 error.response.data.message : error.message
             })
    }
}