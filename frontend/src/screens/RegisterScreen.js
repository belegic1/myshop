import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { register } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

const RegisterScreen = (props) => {
      const redirect = props.location.search ?
     props.location.search.split('=')[1] : '/'
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [name,setName] = useState('')

    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
  const {userInfo, error, loading} = userRegister

  
    useEffect(()=>{
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [userInfo, props.history, redirect])
    const submitHandler =e =>{
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords not match')
        } else {
            dispatch(register(name,email,password))
        }
       
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
                    <label htmlFor="name">Name</label>
                    <input type="name" id='name'
                    value={name}
                     placeholder='Enter Your Name'
                     required
                     onChange={e => setName(e.target.value)}
                      />
                </div>
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
                    <label htmlFor="ConfirmPassword">confirm Password</label>
                    <input type="password" id='confirmPassword'
                    value={confirmPassword}
                     placeholder='Confirm Your Password'
                     required
                     onChange={e => setConfirmPassword(e.target.value)}
                      />
                </div>
                <div>
                    <label />
                    <button type='submit' className="primary">Register</button>
                </div>
                <div>
                    <label ></label>
                    <div>
                        Already have account? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen
