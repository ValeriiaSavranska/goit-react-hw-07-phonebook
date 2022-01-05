import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

const API_ENDPOIT = 'contacts';

const getContacts = createAsyncThunk('contacts/getContactsStatus', () =>
  api.getData(API_ENDPOIT),
);

const addContact = createAsyncThunk('contacts/addContactStatus', contact =>
  api.saveItem(API_ENDPOIT, contact),
);

const deleteContact = createAsyncThunk('contacts/deleteContactStatus', id =>
  api.deleteItem(API_ENDPOIT, id),
);

export { getContacts, addContact, deleteContact };
