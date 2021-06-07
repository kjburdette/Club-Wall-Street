import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { setDescription, setEmail, setFirstName, setLastName } from '../actions/form-action';

export default function SignUp() {
    const dispatch = useDispatch();
    // const firstName = useSelector(state => state.formReducer.firstName)
    const form = useSelector(state => state.formReducer)

    console.log(form)

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <input onChange = {(e) => {setFirstName(dispatch, e.target.value)}} type="text" placeholder="First Name"/>
                <input onChange = {(e) => {setLastName(dispatch, e.target.value)}} type="text" placeholder="Last Name"/>
                <input onChange = {(e) => {setEmail(dispatch, e.target.value)}} type="text" placeholder="Email"/>
                <input onChange = {(e) => {setDescription(dispatch, e.target.value)}} type="textarea" placeholder=""/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
