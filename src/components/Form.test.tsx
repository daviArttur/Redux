import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

// Redux
import { Provider } from "react-redux"
import store from "../store/configureStore"

// Components
import Form from "./Form"

test("the user's login, must save the token and data in the store, then disappear", async () => {
  render(<Provider store={store}> <Form /> </Provider>) 

  const form = screen.getByTestId("form") as HTMLFormElement
  const inputName = screen.getByTestId("inputName") as HTMLInputElement
  const inputPassword = screen.getByTestId("inputPassword") as HTMLInputElement
  const button = screen.getByText("Entrar")

  await userEvent.type(inputName, "qwe" )
  await userEvent.type(inputPassword, "qwe" )

  expect(button).toBeInTheDocument()
  expect(inputName.value).toBe("qwe")
  expect(inputPassword.value).toBe("qwe")
  
  await userEvent.click(button)
  
  await waitFor(() => {
    const tokenInStore = store.getState().token.data
    expect(tokenInStore).toBeTruthy()
  }, { timeout: 2500})

  await waitFor(() => {
    const dataUserInStore = store.getState().user.data
    expect(dataUserInStore).toBeTruthy()
  }, { timeout: 2500})

  waitForElementToBeRemoved(form).then(() => {
    return "Removed"
  })
})