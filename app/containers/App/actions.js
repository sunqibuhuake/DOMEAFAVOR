import {
 ADD_ITEM,
ADD_ITEM_SUCCESS
} from './constants'

export function addItem (item) {
    return {
        type: ADD_ITEM,
        item
    }
}

export function addItemSuccess (items) {
    return {
        type: ADD_ITEM_SUCCESS,
        items
    }
}