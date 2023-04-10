import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
