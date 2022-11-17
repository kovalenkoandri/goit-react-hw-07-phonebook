import css from './ContactList.module.css';
import { rmTask } from 'redux/tasksSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getVisibleContacts, getFilter } from 'redux/selectors';
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = useSelector(getVisibleContacts);
  let renderContacts;
  filter ? (renderContacts = visibleContacts) : (renderContacts = contacts);
  return (
    <ul>
      {renderContacts.map(element => {
        const { id, name, number } = element;
        return (
          <li key={id} className={css.renderLi}>
            {`${name}: ${number} `}
            <button
              type="button"
              className={css.renderBtn}
              onClick={() => dispatch(rmTask(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
