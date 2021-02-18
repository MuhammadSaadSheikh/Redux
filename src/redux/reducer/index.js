import { combineReducers } from 'redux'
import {
    LIST_ADD_START,
    LIST_ADD_SUCCESS,
    LIST_ADD_FAILURE
} from '../types'

const initailState = {
    list : [],
    isLoading: false
}

const addListReducer = ( state = initailState, action ) => {
    switch(action.type){
        case LIST_ADD_START: 
            return {...state, list: [], isLoading: false}
        case LIST_ADD_SUCCESS: 
            return { ...state, list : action.payload.todoList, isLoading: true }
        case LIST_ADD_FAILURE: 
            return { ...state, list: [], isLoading: false }
    }
} 

export default combineReducers(addListReducer)