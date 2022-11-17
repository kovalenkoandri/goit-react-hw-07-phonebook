// import { useState, useEffect } from 'react';
import css from './App.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'redux/tasksSlice';
import { getContacts } from 'redux/selectors';
const App = () => {
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
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default App;
