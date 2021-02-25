/* eslint-disable default-case */
const initialState = ''
const notificationReducer = ( state=initialState, action) => {
    console.log('Action content', action)
    switch(action.type) {
        case 'NOTIFY':
            return action.content
        case 'CLEAR':
            return ''
        default:
            return state
    }
}

export const setNotification = ( content, time ) => {
    return  dispatch => {
    dispatch({
        type: 'NOTIFY',
        content: content
    })
    setTimeout(() => {
        dispatch({
          type: 'CLEAR'
        })
    }, time * 1000)}
}

export default notificationReducer