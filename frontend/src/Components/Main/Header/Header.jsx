import React, { useState } from 'react'
import styles from './Header.module.css'
import Search from '../../../Icons/Search.svg'

export default function Header() {
  const [search, setSearch] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()

    //TODO
    console.log(search)
  }

  return (
    <div id={styles.main}>
      <div id={styles.upperRow}>
        <h1>Demeter</h1>
        <form id={styles.searchContainer} onSubmit={(e) => handleSearch(e)}>
          <input type="text" name="search"
            id={styles.searchInput}
            placeholder=""
            value={search}
            onChange={(event) => setSearch(event.target.value)} />
          <button id={styles.searchIcon} type="submit" onClick={(e) => handleSearch(e)}>
            <img src={Search} alt="Busqueda" />
          </button>
        </form>
      </div>
      <div id={styles.lowerRow}>
        Other Options
      </div>
    </div>
  )
}
