/* eslint-disable default-case */
const initialState = ''
const notificationReducer = ( state=initialState, action) => {
    console.log('Action content', action)
    const content = action.content
    switch(action.type) {
        case 'NOTIFY':
            return content
        case 'CLEAR':
            return ''
        default:
            return state
    }
}

let timeout
export const setNotification = ( content, time ) => {
    return async dispatch => {
        if (timeout) {
            clearTimeout(timeout)
            timeout = null
        } timeout = setTimeout(() => {
            dispatch({ type: 'CLEAR' })
        }, time * 1000)
        dispatch({ type: 'NOTIFY', content })
    }
}

export default notificationReducer