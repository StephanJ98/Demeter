import React from 'react'
import styles from './LogOut.module.css'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export default function LogOut() {
  let navigate = useNavigate()
  const [, , removeCookie] = useCookies(['loginUserName', 'loginHashPassword'])

  const handleSubmit = () => {
    removeCookie('loginUserName')
    removeCookie('loginHashPassword')
    navigate('/login')
  }

  return (
    <button id={styles.container} onClick={() => { handleSubmit() }}>
      Log Out
    </button>
  )
}
