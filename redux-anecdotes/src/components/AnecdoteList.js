import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import Filter from './Filter'

const AnecdoteList = (props) => {
    const vote = (anecdote) => {
        props.addVote(anecdote, 'VOTE')
        props.setNotification( `you voted ${anecdote.content}`, 5 )
      }
    return(
    <div>
      <Filter/>
        <h2>Anecdotes</h2>
        {props.anecdotes.map(anecdote =>
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

const mapDispatchToProps = {
  addVote,
  setNotification
}

const mapStateToProps = (state) => {
    if ( state.filter === '' ) { 
      return {
        anecdotes: state.anecdotes
      }
    } 
    return {
      anecdotes: state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    }
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdotes