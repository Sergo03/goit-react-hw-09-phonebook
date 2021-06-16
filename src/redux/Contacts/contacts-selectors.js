import { createSelector} from '@reduxjs/toolkit';

export const getIsLoadingContacts = state => state.contacts.loading;
export const getFilter =state=>state.contacts.filter
export const getError = state => state.contacts.error
export const getItems = state => state.contacts.items;


export const getVisibalContacts = createSelector(
    [getItems, getFilter],
    (items, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return items.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter))
    }
)