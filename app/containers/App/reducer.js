/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import initData from '../../data/init'
import {
    ADD_ITEM,
ADD_ITEM_SUCCESS

} from './constants';


const initialState = fromJS(initData);

function appReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return state.set('add', action.items)
        case ADD_ITEM_SUCCESS:
            return state.set('items', fromJS(action.items)).set('add', false)
        default:
            return state;
    }
}

export default appReducer;
