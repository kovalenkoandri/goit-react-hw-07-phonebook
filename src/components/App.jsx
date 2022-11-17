// import { useState, useEffect } from 'react';
import css from './App.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'redux/tasksSlice';
import { getContacts } from 'redux/selectors';
const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) || []
  // );
  // const [filter, setFilter] = useState('');
  // useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const changeFilter = event => setFilter(event.target.value);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = (name, number, event) => {
    event.preventDefault(); // except refresh page onSubmit
    const form = event.target;
    if (
      contacts.some(el =>
        el.name.toLocaleUpperCase().includes(name.toLocaleUpperCase())
      )
    ) {
      alert(`${name} is already in contacts.`);
      form.reset();
      return;
    }
    dispatch(addTask(name, number));
    form.reset();
  };
  // const getVisibleContacts = () =>
  //   contacts.filter(contact =>
  //     contact.name.toLocaleUpperCase().includes(filter.toLocaleUpperCase())
  //   );
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2 className={css.title}>Contacts</h2>
      <Filter
        {
          ...{
            // onChange: changeFilter,
            // value: filter,
          }
        }
      />
      <ContactList />
    </div>
  );
};
export default App;
