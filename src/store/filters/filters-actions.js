import { SET_FILTER } from './filters-const';

export const filters = (filter) => ({
  type: SET_FILTER,
  filter,
});
