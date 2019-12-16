import { SETSHOW } from './action-types'

export const setShow = checked => ({
  type: SETSHOW,
  data: checked
})