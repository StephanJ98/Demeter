import React, { useState, useEffect } from 'react'
import styles from './LoginForm.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export default function LoginForm() {
    let navigate = useNavigate()
    const notify = (value) => toast.error(value)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [cookies, setCookies] = useCookies(['loginUserName', 'loginHashPassword'])

    useEffect(() => {
        if (cookies.loginUserName !== undefined) {
            navigate("/")
        }
    }, [])

    const handleName = (value) => {
        setName(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:4000/login/${name}`)
            .then(async res => {
                if (res.status === 250) {
                    notify("La cuenta asociada a este email a sido suspendida temporal o definitivamente.")
                }
                if (res.status === 281) {
                    notify("No hay usuario con este email registrado.")
                }
                if (res.status === 200) {
                    let pass = await res.json()
                    if (pass.password === password) {
                        setCookies('loginUserName', name, { path: '/', maxAge: 600 })
                        setCookies('loginHashPassword', password, { path: '/', maxAge: 600 })
                        navigate("/")
                    } else {
                        notify('Alguno de los datos es incorrecto!')
                    }
                } else if (res.status === 400 || res.status === 500) {
                    notify(`ERROR ${res.status} - Se ha producido un error inesperado`)
                }
            })
    }

    return (
        <>
            <form id={styles.loginFormContainer} onSubmit={(e) => handleSubmit(e)}>
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
