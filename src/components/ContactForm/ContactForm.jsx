import css from './ContactForm.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChangeName = event => setName(event.target.value);
  const handleChangeNumber = event => setNumber(event.target.value);
  return (
    <form
      className={css.phonebookForm}
      onSubmit={event => onSubmit(name, number, event)}
      autoComplete="off"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.inputName}
        onChange={handleChangeName}
        // value={name}
        //remove value attributes, the reset will set all the values to blank
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.inputName}
        onChange={handleChangeNumber}
        // value={number}
        // if uncomment from.reset() doesn't work at App.jsx 
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
