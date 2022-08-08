import "@testing-library/jest-dom"

// Redux
import store from "../store/configureStore"


// Api
import getTokenApi from "./getTokenApi"
import getUserApi from "./getUserApi"

describe("test function getUserApi", () => {
  it("save token in store, and use token for fetch data", async () => {
    const fakeThunk = getTokenApi({ username: "qwe", password: "qwe"})
    await fakeThunk(store.dispatch)
    const token = store.getState().token.data
    const getUser = getUserApi(token!)
    await getUser(store.dispatch)

    const { id, username, nome, email } = store.getState().user.data!
    
    expect(id).toBe(7747)
    expect(username).toBe("qwe")
    expect(nome).toBe("qwe")
    expect(email).toBe("qwe@qwe.com")
  })
})