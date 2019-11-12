export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const DECREASE_ASYNC = 'DECREASE_ASYNC'

export function increase() {
  return {
    type: INCREASE
  }
}
export function decrease() {
  return {
    type: DECREASE
  }
}
export function increaseAsync() {
  return {
    type: INCREMENT_ASYNC
  }
}
export function decreaseAsync() {
  return {
    type: DECREASE_ASYNC
  }
}
