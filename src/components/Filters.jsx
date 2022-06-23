// import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import { filters } from '../store/filters/filters-actions';
// import { selectActiveFilters } from '../store/filters/filters-selectors';

export const Filters = () => {
  // const activeFilter = useSelector(selectActiveFilters);
  // const dispatch = useDispatch();
  const { filter: activeFilter = 'all' } = useParams();

  return (
    <div
      style={{
        marginTop: 10,
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
      }}
    >
      <Link
        // onClick={() => dispatch(filters('all'))}
        to='all'
        style={{ color: activeFilter === 'all' ? 'red' : null }}
        name='button'
      >
        all
      </Link>
      <Link
        // onClick={() => dispatch(filters('active'))}
        to='active'
        style={{ color: activeFilter === 'active' ? 'red' : null }}
        type='button'
      >
        active
      </Link>
      <Link
        // onClick={() => dispatch(filters('completed'))}
        to='completed'
        style={{ color: activeFilter === 'completed' ? 'red' : null }}
        type='button'
      >
        completed
      </Link>
    </div>
  );
};
