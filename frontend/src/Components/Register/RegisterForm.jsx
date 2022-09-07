import React, { useState } from 'react'
import styles from './RegisterForm.module.css'
import { useNavigate } from "react-router-dom"
//import bcrypt from 'bcrypt'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RegisterForm() {
    let navigate = useNavigate()
    const notify = (value) => toast.error(value)
    //const saltRounds = 10
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleName = (value) => {
        setName(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        /*let tempPassword = ''
        bcrypt.hash(password, saltRounds, (err, hash) => {
            tempPassword = hash
        })*/


        /** Register request */
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                password: /*tempPassword*/ password
            })
        }).then(res => {
            if (res.status === 200) {
                navigate("/")
            } else if (res.status === 280) {
                notify("Ya hay un usuario con este email registrado.")
            } else if (res.status === 400 || res.status === 500) {
                notify(`ERROR ${res.status} - Se ha producido un error inesperado`)
            }
        })
    }

    return (
        <>
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


                <div id={styles.btnContainer}>
                    <button className={styles.btnRegister} onClick={(e) => handleSubmit(e)} type="submit">Register</button>
                    <button className={styles.btnRegister} onClick={() => navigate("/login")} type="submit">Or Login ?</button>
                </div>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark' />
        </>
    )
}
