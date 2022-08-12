import React from 'react'
import styles from './DayCard.module.css'

export default function DayCard(props) {
    return (
        <div id={styles.dayCard}>
            <h3 id={styles.dayName}>{props.day[0].toUpperCase() + props.day.substring(1)}</h3>
            <div id={styles.dayTasks}> 
                Tasks Day Id: {props.tasksId}
            </div>
        </div>
    )
}
