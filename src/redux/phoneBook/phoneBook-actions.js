import { createAction } from '@reduxjs/toolkit';

// import actionTypes from './phoneBook-types';

export const addContact = createAction('PHONEBOOK/ADD_CONTACT');

// export const addContact = ({ id, name, number }) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: {
//     id,
//     name,
//     number
//   }
// })

export const deleteContact = createAction('PHONEBOOK/DELETE_CONTACT');
  
// export const deleteContact = id => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: id
// })

export const changeFilter = createAction('PHONEBOOK/CHANGE_FILTER');

// export const changeFilter = filter => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: filter
// })