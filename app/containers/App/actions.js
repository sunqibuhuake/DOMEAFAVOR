import {
 ADD_ITEM,
ADD_ITEM_SUCCESS
} from './constants'

export function addItems (items) {
    return {
        type: ADD_ITEM,
        items
    }
}

export function addItemSuccess (items) {
    return {
        type: ADD_ITEM_SUCCESS,
        items
    }
}