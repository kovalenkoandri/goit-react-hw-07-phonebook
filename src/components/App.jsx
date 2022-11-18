import css from './App.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
const App = () => {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default App;
