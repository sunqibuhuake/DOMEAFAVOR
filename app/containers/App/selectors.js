/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');


const makeSelectLocation = () => createSelector(
    selectRoute,
    (routeState) => routeState.get('location').toJS()
);
const makeSelectItems = () => createSelector(
    selectGlobal,
    (state) => state.get('items').toJS()
);
const makeSelectAdd = () => createSelector(
    selectGlobal,
    (state) => state.get('add')
);


export {
    selectGlobal,
    makeSelectLocation,
    makeSelectItems,
    makeSelectAdd
};
