import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { signin } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

const SigninScreen = (props) => {
      const redirect = props.location.search ?
     props.location.search.split('=')[1] : '/'
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.userSignin)
  const {userInfo, error, loading} = userSignin

  
    useEffect(()=>{
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [userInfo, props.history, redirect])
    const submitHandler =e =>{
        e.preventDefault()
        dispatch(signin(email,password))
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="form">
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox />}{error && <MessageBox variant='danger'>
                    {error}</MessageBox>}
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id='email'
                    value={email}
                     placeholder='Enter Your Email'
                     required
                     onChange={e => setEmail(e.target.value)}
                      />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password'
                    value={password}
                     placeholder='Enter Your Password'
                     required
                     onChange={e => setPassword(e.target.value)}
                      />
                </div>
                <div>
                    <label />
                    <button type='submit' className="primary">Sign In</button>
                </div>
                <div>
                    <label ></label>
                    <div>
                        New customer? {' '}
                        <Link to={`/register?redirect=${redirect}`}>Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SigninScreen
