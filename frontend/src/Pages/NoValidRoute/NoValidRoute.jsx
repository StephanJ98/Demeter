import React from 'react'
import { useNavigate } from "react-router-dom"
import styles from './NoValidRoute.module.css'

import Error404 from '../../Icons/Error404.svg'
import BackspaceRounded from '../../Icons/BackspaceRounded.svg'

export default function NoValidRoute() {

    let navigate = useNavigate()

    const handleBackBTN = () => {
        navigate('/')
    }
    return (
        <div id={styles.main}>
            <img id={styles.err404} src={Error404} alt="Error 404" />
            <h3 id={styles.mesage}>Oops parece que esta página no es valida</h3>
            <img id={styles.backBtn} src={BackspaceRounded} alt="Go back button" onClick={() => handleBackBTN()} />
        </div>
    )
}