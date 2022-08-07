import "@testing-library/jest-dom"

// Redux
import store from "../store/configureStore"

// Api
import getTokenApi from "./getTokenApi"

describe("test function getTokenApi", () => {

  it("save token in store, case fetch sucess", async () => {
    const fakeThunk = getTokenApi({ username: "qwe", password: "qwe"})
    await fakeThunk(store.dispatch)
  
    expect(store.getState().token.data).toBeTruthy()
    expect(store.getState().loading).toStrictEqual({ loading: false })
  })

  it("case fetch failed, return status error in store and callback return", async () => {
    const fakeThunk = getTokenApi({ username: "qwe", password: ""})
    const error = await fakeThunk(store.dispatch)

    expect(store.getState().token.error).toBeTruthy()
    expect(error).toStrictEqual(Error("403"))
    expect(store.getState().loading).toStrictEqual({ loading: false })
  })
})
