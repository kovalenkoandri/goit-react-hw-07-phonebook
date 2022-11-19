import css from './ContactList.module.css';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectItems,
  selectVisibleContacts,
  selectFilter,
} from 'redux/selectors';
const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const filter = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);
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
              onClick={() => dispatch(deleteContact(id))}
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
