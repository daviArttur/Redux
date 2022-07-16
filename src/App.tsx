import { useSelector } from 'react-redux';

// Store
import { RootStateType } from './store/configureStore';

// Components
import Form from './components/Form';
import Feed from './components/feed/Feed';
import Loading from './components/Loading';

// Const to Check Open Page
import { listOpenModal } from './store/openModal';

function App() {

  const state = useSelector((state: RootStateType) => state)
  const openPage = state.openModal.page

  console.log(state)

  if (openPage === listOpenModal.feed) return <Feed/>
  if (state.loading.loading === true) return <Loading />
  
  return (
    <Form />
  )
  
}

export default App;
