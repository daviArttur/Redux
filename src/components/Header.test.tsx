import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

// Component
import Header from "./Header";

// Redux
import { Provider } from "react-redux";
import store from "../store/configureStore";
import getUser from "../store/getUser";

const getToken = () => window.localStorage.getItem("token")
const insertToken = () => window.localStorage.setItem("token", "tokenExample")

test('the click of the button should remove user data and clear user state', () => {
  store.dispatch(getUser.actions.userFecthSucess({ payload: {
    id: 7747,
    username: "qwe",
    nome: "qwe",
    email: "qwe@qwe.com"
  } }))
  
  render(<Provider store={store}> <Header /> </Provider>)
  insertToken()

  const button = screen.getByTestId("button") as HTMLButtonElement
  fireEvent.click(button)

  expect(getToken()).toBeNull()
  expect(store.getState().user.data).toBeNull()
  expect(button).not.toBeInTheDocument()
})


