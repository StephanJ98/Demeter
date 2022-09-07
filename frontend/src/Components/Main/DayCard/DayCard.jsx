import React from 'react'
import styles from './DayCard.module.css'
import { useCookies } from 'react-cookie'
import SubCard from '../SubCard/SubCard'

export default function DayCard(props) {
    const [cookies,] = useCookies(['loginUserName', 'loginHashPassword', 'userWeekPlan'])

    return (
        <div id={styles.dayCard}>
            <h3 id={styles.dayName}>{props.day[0].toUpperCase() + props.day.substring(1)}</h3>
            <div id={styles.dayTasks}>
                <SubCard weektask={JSON.stringify(cookies.userWeekPlan[props.dayName])} />
                Tasks Day Id: {props.tasksId}
            </div>
        </div>
    )
}
