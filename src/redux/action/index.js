import {
    LIST_ADD_START,
    LIST_ADD_SUCCESS,
    LIST_ADD_FAILURE
} from '../types'


// const start = () => ({
//     type: LIST_ADD_START
// })

const success = payload => ({
    type: LIST_ADD_SUCCESS,
    payload
})

// const failure = () => ({
//     type: LIST_ADD_FAILURE
// })

export const addListAction = payload => {
    return async (dispatch, getSate) => {
        if(getSate().isLoading) return
        // dispatch(start())
        dispatch(success({
            todoList: data //todoList ke key reducer 
        }))
    }
}