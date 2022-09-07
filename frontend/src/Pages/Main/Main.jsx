import React, { useEffect } from 'react'
import Header from '../../Components/Main/Header/Header'
import MainBody from '../../Components/Main/MainBody/MainBody'
import styles from '../../Components/Common/Common.module.css'

import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

export default function Main() {
  let navigate = useNavigate()
  const [cookies,] = useCookies(['loginUserName'])

  useEffect(() => {
    if (cookies.loginUserName === undefined) {
      navigate("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id={styles.main}>
      <Header />
      <MainBody />
    </div>
  )
}
