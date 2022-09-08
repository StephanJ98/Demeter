import React, { useState } from 'react'
import ReactModal from 'react-modal'
import styles from './AddTask.module.css'
import Close from '../../../../Icons/Close.svg'

export default function AddTask() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id={styles.container}>
            <button id={styles.btn} onClick={() => setIsOpen(true)}>
                <p>Addtask</p>
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

                <section id={styles.modalSection}>
                    aaa
                </section>
            </ReactModal>
        </div>
    )
}
