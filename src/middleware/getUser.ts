// import { actionInterface, storeInterface } from "../interfaces/middlewareInterface"
// import { Dispatch } from "react"

// interface tokenActionInterface extends actionInterface {
//   payload: {
//     name: string,
//     password: string
//   }
// }

const getTokenMiddleware = (store: any) => (next: any) => (action: any) =>{
  if (typeof action.type === 'function') {
    return action.type(store.dispatch)
  }
  return next(action)
}

export default getTokenMiddleware