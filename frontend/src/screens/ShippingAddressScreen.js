import React ,{useState}from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import {useDispatch, useSelector} from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingAddressScreen = (props) => {
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo } = userSignin
    const cart= useSelector(state => state.cart)
    const {shippingAddress} = cart
    if(!userInfo){
        props.history.push('/signin')
    }
    const[fullName, setFullName] = useState(shippingAddress.fullName)
    const[address, setAddress] = useState(shippingAddress.address)
    const[city, setCity] = useState(shippingAddress.city)
    const[postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

     const dispatch = useDispatch()
  
    const submitHandler =(e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({
            fullName, address, city, postalCode, country
        }))
        props.history.push('/payment')
    }

    return (
        <div>
            <CheckoutSteps step1 step2  />
            <form onSubmit={submitHandler} className="form">
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" 
                    placeholder='Enter your full Name'
                    id='fullName'
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" 
                    placeholder='Enter your Address'
                    id='address'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" 
                    placeholder='Enter your City'
                    id='city'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input type="text" 
                    placeholder='Enter your Postal Code'
                    id='postalCode'
                    value={postalCode}
                    onChange={e => setPostalCode(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input type="text" 
                    placeholder='Enter your Country'
                    id='country'
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label ></label>
                    <button type='submit' className="primary">Continue</button>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddressScreen
