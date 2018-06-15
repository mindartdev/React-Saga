import { createSelector } from 'reselect'
export const picturesSelector = createSelector(
  state => state.get(`pics`),
  pics => pics
)