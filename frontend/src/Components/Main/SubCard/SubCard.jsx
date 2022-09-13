import React from 'react'
import styles from './SubCard.module.css'

export default function SubCard(props) {

    let json = {}
    if (props.weektask !== undefined) {
        json = JSON.parse(props.weektask)
    }

    const mapHeight = (hour) => {
        return Math.round((props.height / (props.fHour - props.sHour)) * (hour - props.sHour))
    }

    return (
        <>
            {Object.keys(json).map((key, index) => {
                return (
                    <div
                        className={styles.weekTask}
                        style={{ top: `${mapHeight(json[key][0])}px`, height: mapHeight(json[key][1]) - mapHeight(json[key][0]) }}
                        key={index}>
                        <div>
                            <p id={styles.hours}>
                                {(String(json[key][0]).length === 3) ? (String(json[key][0]).substring(0, 1) + 'h' + String(json[key][0]).substring(1)) : (String(json[key][0]).substring(0, 2) + 'h' + String(json[key][0]).substring(2))}
                            </p>
                            <p id={styles.hours}>
                                {(String(json[key][1]).length === 3) ? (String(json[key][1]).substring(0, 1) + 'h' + String(json[key][1]).substring(1)) : (String(json[key][1]).substring(0, 2) + 'h' + String(json[key][1]).substring(2))}
                            </p>
                        </div>
                        <p id={styles.taskName}>{key} {json[key][2]}</p>
                    </div>
                )
            })}
        </>
    )
}
