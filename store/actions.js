import { ADD_EXPENSE } from './types'

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
})