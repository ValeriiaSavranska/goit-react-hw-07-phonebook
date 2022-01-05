import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './App.module.css';

import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import Filter from '../Filter/Filter.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import * as actions from '../../redux/contactsSlice/contactsSlice';
import * as operations from '../../redux/contactsSlice/contactsOperations';
import * as selectors from '../../redux/contactsSlice/contactsSelectors';

const App = () => {
  const contacts = useSelector(selectors.getContacts);
  const loading = useSelector(selectors.getLoading);
  const error = useSelector(selectors.getError);
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [dispatch]);

  const formSubmitHandler = (name, phone) => {
    const newContact = {
      name,
      phone,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      )
    ) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    dispatch(operations.addContact(newContact));
  };

  const deleteContact = id => {
    dispatch(operations.deleteContact(id));
    dispatch(actions.changeFilter(''));
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  const changeFilter = e => {
    dispatch(actions.changeFilter(e.target.value));
  };

  const noContacts = !loading && !contacts.length;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>

      <ContactForm onSubmit={formSubmitHandler} />

      <h2 className={styles.title}>Contacts</h2>

      {loading && <Loader />}

      {noContacts && <h4>No cities yet</h4>}

      {error && <ErrorMsg message={error} />}

      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}

      {!!getFilteredContacts().length && (
        <ContactList
          filteredContacts={getFilteredContacts()}
          onDeleteContacts={deleteContact}
        />
      )}
    </div>
  );
};

export default App;
