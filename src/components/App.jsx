import css from './App.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getLoading, getError } from 'redux/selectors';
const App = () => {
  const dispatch = useDispatch();
  // console.log(useSelector(getItems));
  // const items = useSelector(getItems);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      {/* <p>{items.length > 0 && JSON.stringify(items)}</p> */}
    </div>
  );
};
export default App;
