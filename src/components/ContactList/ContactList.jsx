import css from './ContactList.module.css';
import { rmTask } from 'redux/tasksSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getVisibleContacts, getFilter } from 'redux/selectors';
const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const visibleContacts = useSelector(getVisibleContacts);
  let renderContacts;
  filter ? (renderContacts = visibleContacts) : (renderContacts = items);
  return (
    <ul>
      {renderContacts.map(element => {
        const { id, name, phone } = element;
        return (
          <li key={id} className={css.renderLi}>
            {`${name}: ${phone} `}
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
