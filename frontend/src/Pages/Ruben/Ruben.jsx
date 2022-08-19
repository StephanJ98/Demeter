import React, { useEffect, useState } from 'react'
import styles from './Ruben.module.css'

export default function Ruben() {
    const [abcd10, setAbcd10] = useState('')

    useEffect(() => {

        fetch(`http://localhost:4000/ruben`)
            .then(async res => {
                if (res.status === 200) {
                    let dataRaw = await res.json()
                    dataRaw = dataRaw.letras.sort().slice(0, 10)
                    let dataFinal = ""
                    await dataRaw.forEach(element => {
                        /**
                         * Ciertas funciones cambian direactamente el valor del elemento
                         * otras solo devuelven una copia que hay que guardar.
                         */
                        dataFinal = dataFinal.concat(element)
                    })
                    setAbcd10(dataFinal)
                }
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.padre}>
            <div className={styles.hijo}>
                {abcd10}
            </div>
        </div>
    )
}