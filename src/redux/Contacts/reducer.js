import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';

import * as actions from './action'

const items = createReducer([], {
    [actions.fetchContactSuccsess]:(state,{payload})=>payload,
    [actions.addContactSuccsess]: (state, {payload}) => [...state, payload],
    [actions.deleteContactSuccsess]:(state, {payload})=>state.filter(contact => contact.id !== payload),
})

const loading = createReducer(false, {
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccsess]: () => false,
  [actions.fetchContactError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccsess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccsess]: () => false,
  [actions.deleteContactError]: () => false,
});

const filter = createReducer('', {
    [actions.changeFilter]:(_,{payload})=>payload,
})

const error = createReducer(null, {
    [actions.fetchContactError]: (_,{payload})=>payload,
    [actions.addContactError]:(_,{payload})=>payload,
    [actions.deleteContactError]:(_,{payload})=>payload
})

export default combineReducers({
    items,
    filter,
    loading,
    error
})
















// import { combineReducers } from 'redux';
// import types from './types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };


// export default combineReducers({
//   items,
//   filter,
// });