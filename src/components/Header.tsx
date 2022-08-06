import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../store/configureStore'
import getUser from '../store/getUser'
import openModal from '../store/openModal' 

// Styles 
import styles from './Header.module.css'

const Header = () => {
  const userDataLogin = useSelector((state : RootStateType) => state.user.data)
  const dispatch = useDispatch()
  
  function handleClickDisconectUser() {
    window.localStorage.removeItem('token')
    dispatch(openModal.actions.setOpenModal('components/Form'))
    dispatch(getUser.actions.userDisconect())
  }

  return (
    <header>
      <h1 className={styles.title}>Mini Dogs</h1>
      {userDataLogin && (
        <button 
        className={styles.button} 
        onClick={handleClickDisconectUser}
        data-testid="button"
      > </button>
      )} 
    </header>
  )
}

export default Header