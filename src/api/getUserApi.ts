import store from '../store/configureStore';

// Store
import getUser from '../store/getUser';
import openModal from '../store/openModal';

// Type
import { DispatchType } from '../store/configureStore';

const fetchUser = (token: string) => async (dispatch: DispatchType) => {
  try {
   dispatch(getUser.actions.userFetchStarted())
    const response = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const data = await response.json();
    if (data) {
      store.dispatch(getUser.actions.userFecthSucess(data))
      store.dispatch(openModal.actions.setOpenModal('components/Feed'))
      return true
    }
    throw new Error("Error");
  } catch (error) {
    store.dispatch(getUser.actions.userFetchError())
    return error
  }
};

export default fetchUser



