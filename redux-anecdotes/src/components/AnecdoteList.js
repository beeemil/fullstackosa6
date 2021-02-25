import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'
import Filter from './Filter'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(addVote(anecdote, 'VOTE'))
        dispatch(setNotification( `you voted ${anecdote.content}`, 5 ))
      }

    const anecdotes = useSelector(({ filter, anecdotes }) => {
      if ( filter === '' ) { 
        return anecdotes
      } 
      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    })
    return(
    <div>
      <Filter/>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div name = 'anecdotes'>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {vote(anecdote)}}>vote</button>
            </div>
          </div>
        )}
    </div>
    )
}

export default AnecdoteList