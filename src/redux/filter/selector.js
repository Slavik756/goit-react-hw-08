import { createSelector } from "@reduxjs/toolkit";
import { selectContact } from "../contacts/selector";

export const selectFilter = (state) => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filterName) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);