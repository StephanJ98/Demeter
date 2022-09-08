import React from 'react'
import styles from './SubCard.module.css'

export default function SubCard(props) {

    let json = {}
    if (props.weektask !== undefined) {
        json = JSON.parse(props.weektask)
    }

    return (
        <div>
            {Object.keys(json).map((key, index) => {
                return (
                    <div className={styles.weekTask} key={index}>
                        <p id={styles.startHour}>{json[key][0]}</p>
                        <p>{key} {json[key][2]}</p>
                        <p id={styles.endHour}>{json[key][1]}</p>
                    </div>
                )
            })}
        </div>
    )
}
