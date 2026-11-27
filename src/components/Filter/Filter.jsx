import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Search..."
        />
      </FilterLabel>
    </FilterWrapper>
  );
};
