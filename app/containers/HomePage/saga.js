/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_ITEM } from '../App/constants';
import {addItemSuccess } from '../App/actions';
import {makeSelectAdd } from '../App/selectors';

//import request from 'utils/request';
//import api from '../../utils/api'

import helper from '../../utils/helper'


export function* addItem() {
  const add_items = yield select(makeSelectAdd())
  helper.saveItems(add_items);
  const items = helper.getItems();
  yield put(addItemSuccess(items))

}

export default function* homeSaga() {
  yield takeLatest(ADD_ITEM, addItem);
}
