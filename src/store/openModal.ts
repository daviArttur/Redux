import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  page: 'components/Form' | 'components/Feed'
}

interface payloadInterface {
  payload: 'components/Form' | 'components/Feed';
  type: string;
}

interface listModalInterface {
  form: 'components/Form',
  feed: 'components/Feed'
}

const initialState: initialStateInterface = {
  page: 'components/Form'
}

export const listOpenModal: listModalInterface = {
  form: 'components/Form',
  feed: 'components/Feed'
}

const openModal = createSlice({
  name: 'openModal',
  initialState,
  reducers: {
    setOpenModal(state, action: payloadInterface) {
      state.page = action.payload
    }
  }
})

export default openModal