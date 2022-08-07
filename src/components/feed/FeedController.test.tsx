import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

// Redux
import { Provider } from "react-redux"
import store from "../../store/configureStore"

// Components
import FeedController from "./FeedController"

describe("test if controller is calling 3 photos with each interaction", () => {

  const setup = () => render(<Provider store={store}> <FeedController/> </Provider>)

  it("should show 3 dogs when rendering", async () => {
    setup()
    
    await waitFor(() => {
      const photosItem = screen.getAllByRole("img")
      expect(photosItem).toHaveLength(3)
    }, { timeout: 5000 })
  })
  
  it("should show 6 dogs when calling new photos", async () => {
    setup()

    const button = screen.getByRole("button", { name: "+" }) as HTMLButtonElement
  
    await userEvent.click(button)
  
    await waitFor(() => {
      const photosItem = screen.getAllByRole("img")
      expect(photosItem).toHaveLength(6)
    }, { timeout: 4000 })
  })

  it("should show 9 dogs when calling new sphotos", async () => {
    setup()

    const button = screen.getByRole("button", { name: "+" }) as HTMLButtonElement
  
    await userEvent.click(button)

    await userEvent.click(button)

    await waitFor(() => {
      const photosItem = screen.getAllByRole("img")
      expect(photosItem).toHaveLength(9)
    }, { timeout: 5000 })
  })
})

