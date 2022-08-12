import React, { useState, useEffect, Suspense } from 'react'
import DayCard from '../DayCard/DayCard'
import styles from './MainBody.module.css'


export default function MainBody() {
    const [days, setDays] = useState('')

    useEffect(() => {
        let arr = new Array(7)
        let today = new Date()

        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
            arr[i] = arr[i].toLocaleDateString(window.navigator.language, { weekday: "long", month: "long", day: "numeric" })
        }

        setDays(arr)
    }, [])

    let dataRender = (date = new Date()) => {
        let tasksId = (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 86400000
        if (days !== '') {
            return days.map((day) => <DayCard key={day} day={day} tasksId={tasksId++} />)
        }
    }

    return (
        <div id={styles.main}>
            <Suspense fallback={<p>Loading...</p>}>
                {
                    dataRender()
                }
            </Suspense>
        </div>
    )
}
