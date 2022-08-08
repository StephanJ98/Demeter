import React from 'react'
import Header from '../../Components/Main/Header/Header'
import MainBody from '../../Components/Main/MainBody/MainBody'
import styles from './Main.module.css'

export default function Main() {
  return (
    <div id={styles.main}>
      <Header />
      <MainBody />
    </div>
  )
}
