import React, { useEffect } from 'react'
import styles from './SubCard.module.css'
import { v4 as uuidv4 } from 'uuid'

export default function SubCard(props) {
    let hoursArray = [props.sHour]
    let uuid = uuidv4()
    let previousKey = ''

    let json = {}
    if (props.dayTasks !== undefined) {
        json = JSON.parse(props.dayTasks)
    }

    const mapHeight = (hour) => {
        return Math.round((props.height / (props.fHour - props.sHour)) * (hour - props.sHour))
    }

    const addHoursToArray = (key) => {
        hoursArray.push(json[key][0])
        hoursArray.push(json[key][1])
    }

    const addBlankHours = () => {

        // Construct Array with hours
        Object.keys(json).map((key, index) => {
            addHoursToArray(key)
        })
        console.log(hoursArray)





        /*if ((hoursArray[1] != undefined) && (hoursArray[0] !== hoursArray[1])) {
            const el = document.createElement('div')
            el.innerHTML = 'AAA'
            el.style.top = mapHeight(hoursArray[1])
            el.style.height = mapHeight(hoursArray[1])
            document.getElementById(uuid).appendChild(el)
        }*/
    }

    useEffect(() => {
        addBlankHours()
    }, [])


    return (
        <div id={uuid}>
            {Object.keys(json).map((key, index) => {



                return (
                    <div
                        className={styles.weekTask}
                        name={json[key][0]}
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
        </div>
    )
}
