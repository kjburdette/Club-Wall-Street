import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { setDescription, setEmail, setFirstName, setLastName } from '../actions/form-action';
import { sendToSupabase } from '../actions/supabase-action';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default function SignUp() {
    const dispatch = useDispatch();
    const firstName = useSelector(state => state.formReducer.firstName)
    const lastName = useSelector(state => state.formReducer.lastName)
    const email = useSelector(state => state.formReducer.email)
    const description = useSelector(state => state.formReducer.description)
    const formData = {firstName, lastName, email, description}
    const form = useSelector(state => state.formReducer)

    const [totalUsers, setTotalUsers] = useState("");

    useEffect(() => {
        getUsers()
    }, [totalUsers])

    const getUsers = async () => {
        const { data, error } = await supabase
            .from('SignUpForm')
            .select()
            setTotalUsers(data.length)
    }

    return (
        <div className="form-container">
            <div className="form-inner-container">
                <h1>Sign Up For Pre-Alpha</h1>
                <form onSubmit={ (e) => sendToSupabase(e, formData)}>
                    <p>First Name:</p>
                    <input onChange = {(e) => {setFirstName(dispatch, e.target.value)}} type="text" required className="user-input"/>
                    <p>Last Name:</p>
                    <input onChange = {(e) => {setLastName(dispatch, e.target.value)}} type="text" required className="user-input"/>
                    <p>Email:</p>
                    <input onChange = {(e) => {setEmail(dispatch, e.target.value)}} type="email" required className="user-input"/>
                    <p>Tell us why you're excited to play Club Wall Street:</p>
                    <textarea onChange = {(e) => {setDescription(dispatch, e.target.value)}} className="user-input"/>
                    <div>
                        <button type="submit" className="form-button">Sign Up</button>
                    </div>
                </form>

                <p>We have <span>{totalUsers}</span> players signed up!</p>
            </div>
        </div>
    )
}
