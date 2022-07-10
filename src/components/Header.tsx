import { useDispatch } from 'react-redux'
import getUser from '../store/getUser'

import openModal from '../store/openModal' 

// Styles 
import styles from './Header.module.css'

const Header = () => {

  const dispatch = useDispatch()

  function handleClickDisconectUser() {
    window.localStorage.removeItem('token')
    dispatch(openModal.actions.setOpenModal('components/Form'))
    dispatch(getUser.actions.userDisconect())
  }

  return (
    <header>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button className={styles.button} onClick={handleClickDisconectUser}> </button>
    </header>
  )
}

export default Header