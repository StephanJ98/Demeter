import React, { useState } from 'react'
import styles from './RegisterForm.module.css'

export default function RegisterForm() {
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
         * 1. handleSubmit()
         * 1.1. Call API
         * 1.2. Process API response
         */
        alert('ToDo')
    }

    return (
        <form id={styles.registerFormContainer}>
            <h1 id={styles.logoRegister}>Demeter</h1>
            <input
                type="text"
                name="name"
                placeholder='Name'
                value={name}
                onChange={(e) => handleName(e.target.value)}
                id={styles.nameRegister} />

            <input
                type="password"
                name="name"
                placeholder='Password'
                value={password}
                onChange={(e) => handlePassword(e.target.value)}
                id={styles.passwordRegister} />

            <button id={styles.btnRegister} onClick={(e) => handleSubmit(e)} type="submit">Register</button>
        </form>
    )
}
