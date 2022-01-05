const getContacts = state => state.contacts.data.items;
const getLoading = state => state.contacts.data.loading;
const getError = state => state.contacts.data.error;
const getFilter = state => state.contacts.filter;

export { getContacts, getLoading, getError, getFilter };
