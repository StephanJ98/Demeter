import React from 'react'
import styles from './SubCard.module.css'

export default function SubCard(props) {

    let json = {}
    if (props.weektask !== undefined) {
        json = JSON.parse(props.weektask)
    }

    return (
        <div>
            {/*dataRender()*/}
            {Object.keys(json).map((key, index) => {
                return (
                    <div className={styles.weekTask} key={index}>
                        <h5 id={styles.startHour}>{json[key][0]}</h5>
                        <p>{key} {json[key][2]}</p>
                        <h5 id={styles.endHour}>{json[key][1]}</h5>
                    </div>
                );
            })}
        </div>
    )
}
