import { ADD_EXPENSE } from './types'
import initFxn from '../utils/fakerDb'
import faker from 'faker'

const initialState = {
  transactions: initFxn(50),
}

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        transactions: [
          {
            odometer: action.payload.odometer,
            gas: action.payload.gas,
            type: action.payload.type,
            ppl: action.payload.ppl,
            created_at: action.payload.createdAt,
            id: faker.datatype.uuid(),
          },
          ...state.transactions,
        ],
      }
    default:
      return state
  }
}

export default transactionsReducer
