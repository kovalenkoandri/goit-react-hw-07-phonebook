import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterTask } from 'redux/tasksSlice';
import { selectFilter } from 'redux/selectors';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        className={css.inputName}
        onChange={event => dispatch(filterTask(event.target.value))}
        value={filter}
      />
    </>
  );
};

export default Filter;
