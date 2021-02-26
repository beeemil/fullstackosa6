import React from 'react'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const createAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.addAnecdote(content)
        props.setNotification(`new anecdote '${content}'`, 5)
      }
    return(
        <div>
            <h2>create new</h2>
            <form onSubmit = {createAnecdote}>
            <div><input name = 'anecdote'/></div>
            <button  type='submit'>create</button>
            </form>
        </div>
    )
}

export default connect(null, { addAnecdote, setNotification })(AnecdoteForm)