export const selectItems = state => state.contacts.items;
export const selectVisibleContacts = state => state.visibleContacts;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
