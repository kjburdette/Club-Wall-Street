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

    console.log(form)
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
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={ (e) => sendToSupabase(e, formData)}>
                <input onChange = {(e) => {setFirstName(dispatch, e.target.value)}} type="text" placeholder="First Name"/>
                <input onChange = {(e) => {setLastName(dispatch, e.target.value)}} type="text" placeholder="Last Name"/>
                <input onChange = {(e) => {setEmail(dispatch, e.target.value)}} type="text" placeholder="Email"/>
                <input onChange = {(e) => {setDescription(dispatch, e.target.value)}} type="textarea" placeholder=""/>
                <button type="submit">Sign Up</button>
            </form>

            <p>We have {totalUsers} ready to play!</p>
        </div>
    )
}
