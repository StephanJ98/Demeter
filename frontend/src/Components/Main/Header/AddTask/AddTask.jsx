import React, { useState } from 'react'
import ReactModal from 'react-modal'
import styles from './AddTask.module.css'
import Close from '../../../../Icons/Close.svg'

export default function AddTask() {
    const [isOpen, setIsOpen] = useState(false)
    const [modalMode, setModalMode] = useState('normal')

    const handleModalCloseReturn = () => {
        if (modalMode === 'weekly' || modalMode === 'unique') setModalMode('normal')
        else setIsOpen(false)
    }

    const ModalCloseBtn = () => {
        return (
            <button id={styles.modalBtn} onClick={() => handleModalCloseReturn()}>
                <img src={Close} alt="Close Button" />
            </button>
        )
    }

    const NormalModal = () => {
        if (modalMode === 'normal') {
            return (
                <>
                    <ModalCloseBtn />

                    <section id={styles.modalSection}>
                        <h2 id={styles.modalSectionText}>Add a weekly task or a unique task?</h2>
                        <section id={styles.modalSectionBtn}>
                            <button className={styles.modalBtns} onClick={() => setModalMode('weekly')}>Weekly</button>
                            <button className={styles.modalBtns} onClick={() => setModalMode('unique')}>Unique</button>
                        </section>
                    </section>
                </>
            )
        } else if (modalMode === 'weekly') {
            return (
                <>
                    <ModalCloseBtn />

                    <section id={styles.modalSection}>
                        <h2 id={styles.modalSectionText}>Weekly</h2>
                    </section>
                </>
            )
        } else if (modalMode === 'unique') {
            return (
                <>
                    <ModalCloseBtn />

                    <section id={styles.modalSection}>
                        <h2 id={styles.modalSectionText}>Unique</h2>
                    </section>
                </>
            )
        }
    }

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
                {NormalModal()}
            </ReactModal>
        </div>
    )
}
