import React, { useState } from 'react'
import styles from './LoginForm.module.css'

export default function LoginForm() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleName = (value) => {
        setName(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //ToDo
        /**
         * 1. Check Cookies 
         * 1.1. If cookies == true > automatic log in and redirect to /
         * 1.2. In cookies != true > do normal flow
         * 
         * 2. handleSubmit()
         * 2.1. Call API
         * 2.2. Process API response
         * 
         * 1. Is executed after render other steps are executed on handleSubmit()
         */
        alert('ToDo')
    }

    return (
        <form id={styles.loginFormContainer}>
            <h1 id={styles.logoLogin}>Demeter</h1>
            <input
                type="text"
                name="name"
                placeholder='Name'
                value={name}
                onChange={(e) => handleName(e.target.value)}
                id={styles.nameLogin} />

            <input
                type="password"
                name="name"
                placeholder='Password'
                value={password}
                onChange={(e) => handlePassword(e.target.value)}
                id={styles.passwordLogin} />

            <button id={styles.btnLogin} onClick={(e) => handleSubmit(e)} type="submit">Log In</button>
        </form>
    )
}
