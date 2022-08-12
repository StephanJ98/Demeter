import React, { useState } from 'react'
import styles from './Header.module.css'
import ReactModal from 'react-modal'

import AddTask from './AddTask/AddTask'
import ImportTask from './ImportTask/ImportTask'
import LogOut from './LogOut/LogOut'
import { ReactComponent as Close } from '../../../Icons/Close.svg'
import { ReactComponent as Options } from '../../../Icons/Options.svg'
import { ReactComponent as Search } from '../../../Icons/Search.svg'

export default function Header() {
  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = (event) => {
    event.preventDefault()

    //TODO
    console.log(search)
    alert('ToDo')
  }

  let options = () => {

    if (window.screen.width > 600) {
      return (
        <div id={styles.lowerRow}>
          <AddTask />
          <ImportTask />
          <LogOut />
        </div>
      )
    } else {
      return (
        <>
          <button id={styles.optionsBtn} onClick={() => setIsOpen(true)}>
            <Options alt="Options Button" />
          </button>

          <ReactModal
            isOpen={isOpen}
            appElement={document.body}
            className={styles.optionsModal}
            overlayClassName={styles.overlayOptionsModal}
          >
            <button id={styles.modalBtn} onClick={() => setIsOpen(false)}>
              <Close alt="Close Button" />
            </button>

            <AddTask />
            <ImportTask />
            <LogOut />
          </ReactModal>
        </>
      )
    }
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
            <Search alt="Search" />
          </button>
        </form>
      </div>
      {options()}
    </div>
  )
}
