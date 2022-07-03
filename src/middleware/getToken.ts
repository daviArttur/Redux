import { actionInterface, storeInterface } from "../interfaces/middlewareInterface"
import { Dispatch } from "react"

interface tokenActionInterface extends actionInterface {
  payload: {
    name: string,
    password: string
  }
}

const getTokenMiddleware = (store: storeInterface) => (next: Dispatch<tokenActionInterface>) => (action: tokenActionInterface) =>{
  console.log('Action type => ', action)
  return next(action)
}

export default getTokenMiddleware