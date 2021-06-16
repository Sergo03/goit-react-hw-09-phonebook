
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccsess = createAction('contacts/fetchCotactSuccsess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccsess = createAction('contacts/addCotactSuccsess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccsess = createAction('contacts/deleteCotactSuccsess');
export const deleteContactError = createAction('contacts/deleteContactError');




 export const  changeFilter=createAction('contacts/changeFilter')
















