import { useSelector } from 'react-redux';

// Store
import { RootStateType } from './store/configureStore';

// Components
import Form from './components/Form';
import Loading from './components/Loading';

// Const to Check Open Page
import { listOpenModal } from './store/openModal';
import FeedController from './components/feed/FeedController';

function App() {

  const state = useSelector((state: RootStateType) => state)
  const openPage = state.openModal.page

  if (openPage === listOpenModal.feed) return <FeedController />
  if (state.loading.loading === true) return <Loading />
  
  return (
    <Form />
  )
  
}

export default App;
