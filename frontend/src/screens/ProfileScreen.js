import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { detailsUser, updateUserProfile } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { USER_PROFILE_UPDATE_RESET } from '../constants/userConstants'


const ProfileScreen = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo } = userSignin

    const userDetails = useSelector(state => state.userDetails)
    const {loading, user, error} = userDetails

    const  userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {loading: loadingUpdate,
            success: successUpdate,
            error: errorUpdate} =  userUpdateProfile

    useEffect(() => {
        if (!user) {
         dispatch(detailsUser(userInfo._id))   
        } else {
            setName(user.name)
            setEmail(user.email)
        }
        
    }, [dispatch, userInfo._id, user])

    const submitHandler = e =>{
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords not Match!')
        } else {
            dispatch({type: USER_PROFILE_UPDATE_RESET})
            dispatch(updateUserProfile({
                userId: user._id, name,email,password
            }))
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler} className="form">
                <div><h1>User Profile</h1></div>
                {loading? <LoadingBox /> : error? <MessageBox variant='danger'>
                {error}</MessageBox>:
                (
                    <>
                    {loadingUpdate && <LoadingBox />}
                    {errorUpdate && <MessageBox variant='danger'>
                        {errorUpdate}</MessageBox>}
                    {successUpdate && <MessageBox variant='success'>
                        Profile Updated successfully</MessageBox>}
                        <div>
                            <label htmlFor="name">Name</label>
                            <input 
                             type="text" id='name' value={name}
                             onChange ={e => setName(e.target.value)}
                             placeholder='Enter Name'
                             />
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input 
                             type="email" id='email'
                              value={email}
                              onchange={e => setEmail(e.target.value)}
                             placeholder='Enter Email'
                             />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input 
                            value={password}
                            onChange={e =>setPassword(e.target.value)}
                             type="password" id='password'
                             placeholder='Enter Password'
                             />
                        </div>
                       
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input 
                            value={confirmPassword}
                            onchange={e => setConfirmPassword(e.target.value)}
                             type="password" id='confirmPassword' 
                             placeholder='Confirm Password'
                             />
                        </div>
                        <div>
                            <label ></label>
                            <button className="primary" type='submit'>
                                Update
                            </button>
                        </div>
                    </>
                )
                }
            </form>
        </div>
    )
}

export default ProfileScreen
