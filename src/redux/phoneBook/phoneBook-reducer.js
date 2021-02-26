import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// import actionTypes from './phoneBook-types';
import * as actions from './phoneBook-actions';

const contactsListReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

// const contactsListReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD_CONTACT:
//       return [payload, ...state]

//     case actionTypes.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload.id)
  
//     default:
//       return state;
//   }
// }

const contactFilterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload
})

// const contactFilterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload
      
//     default:
//       return state;
//   }
// }

const contactsReducer = combineReducers({
  items: contactsListReducer,
  filter: contactFilterReducer
})

export default contactsReducer;