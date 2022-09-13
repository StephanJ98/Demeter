import React, { useState, useEffect, useRef } from 'react'
import styles from './DayCard.module.css'
import { useCookies } from 'react-cookie'
import SubCard from '../SubCard/SubCard'

export default function DayCard(props) {
    const [cookies,] = useCookies(['loginUserName', 'loginHashPassword', 'userWeekPlan'])
    const [height, setHeight] = useState(0)
    const refTotal = useRef(null)
    const refTitle = useRef(null)

    useEffect(() => {
        let totalHeight = refTotal.current.clientHeight
        let dayTitleHeight = refTitle.current.clientHeight
        setHeight( totalHeight - dayTitleHeight)
    }, [])


    return (
        <div ref={refTotal} id={styles.dayCard}>
            <h3 ref={refTitle} id={styles.dayName}>{props.day[0].toUpperCase() + props.day.substring(1)}</h3>
            <div id={styles.dayTasks}>
                <SubCard dayTasks={JSON.stringify(cookies.userWeekPlan[props.dayName])} height={height} sHour={800} fHour={2000} />
                {/*Tasks Day Id: {props.tasksId}*/}
            </div>
        </div>
    )
}
