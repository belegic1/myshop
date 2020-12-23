import React, {useState} from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import {useDispatch, useSelector} from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentMethodsScreen = (props) => {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    if (!shippingAddress.address) {
        props.history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    const dispatch = useDispatch()

    const submitHandler = e =>{
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        props.history.push('/placeorder')
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <form onSubmit={submitHandler} className="form">
                <div>
                    <h1>Payment Methods</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" value='PayPal'
                        id='paypal' name='paymentMethod' required checked
                        onChange={e => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" value='Stripe'
                        id='stripe' name='paymentMethod' required
                        onChange={e => setPaymentMethod(e.target.value)}
                        />
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type='submit' > Continue</button>
                </div>
            </form>
        </div>
    )
}

export default PaymentMethodsScreen
