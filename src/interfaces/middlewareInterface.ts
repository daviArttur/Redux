export interface storeInterface {
  dispatch: Function,
  getState:  Function
}

export interface actionInterface {
  type: string | Function,
  payload?: {}
} 