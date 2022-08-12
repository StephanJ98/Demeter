import React, { useState } from 'react'
import ReactModal from 'react-modal'
import styles from './ImportTask.module.css'
import Close from '../../../../Icons/Close.svg'

export default function ImportTask() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id={styles.container}>
            <button id={styles.btn} onClick={() => setIsOpen(true)}>
                <p>Importask</p>
            </button>

            <ReactModal
                isOpen={isOpen}
                appElement={document.body}
                overlayClassName={styles.overlayOptionsModal}
                className={styles.taskModal}
            >
                <button id={styles.modalBtn} onClick={() => setIsOpen(false)}>
                    <img src={Close} alt="Close Button" />
                </button>

                <p>ToDo</p>
            </ReactModal>
        </div>
    )
}
