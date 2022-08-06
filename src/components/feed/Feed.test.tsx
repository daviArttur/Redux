import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"

// Redux
import { Provider } from "react-redux"
import store from "../../store/configureStore"

// Components
import Feed from "./Feed"


test('called api, should return 3 divs with the information of the dogs', async () => {
  render(<Provider store={store}> <Feed index={1}/> </Provider>) 

  await waitFor(() => {
    const photos = screen.getAllByRole("img") as HTMLImageElement[]

    photos.forEach((img) => expect(img).toBeInTheDocument())
    expect(photos).toHaveLength(3)
  }, { timeout: 4000 }) 

   await waitFor(() => {
     const name = screen.getAllByTestId("photoTitle") as HTMLParagraphElement[]
    
     name.forEach((name) => expect(name).toBeInTheDocument())
     expect(name).toHaveLength(3)
   }, { timeout: 4000 }) 

   await waitFor(() => {
      const views = screen.getAllByTestId("photoViews") as HTMLParagraphElement[]
     
      views.forEach((views) => {
        expect(views).toBeInTheDocument()
      })
      expect(views).toHaveLength(3)
   }, { timeout: 4000 }) 
} )