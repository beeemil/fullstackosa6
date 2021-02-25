import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()

    const filter = (event) => {
        console.log('Filter comp', event.target.value)
        event.preventDefault()
        return dispatch(filterChange(event.target.value))
    }
    return (
        <input onChange = {(e) => filter(e)}/>

    )    
}
export default Filter