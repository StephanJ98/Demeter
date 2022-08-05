import React from 'react'
import styles from './NoValidRoute.module.css'

import Error404 from '../../Icons/Error404.svg'

export default function NoValidRoute() {
    return (
        <div id={styles.main}>
            <img id={styles.err404} src={Error404} alt="Error 404" />
            <h3 id={styles.mesage}>Oops parece que esta página no es valida</h3>
        </div>
    )
}