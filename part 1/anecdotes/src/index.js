import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text}) => (
  //simple button element
  <button onClick={onClick}>
    {text}
  </button>
)

const Anecdote = ({anecdotes, selected, points}) => {
  //element for display of individual element and accompanying statistic
  return(
    <div>
      {anecdotes[selected]}
      <Statistic votes={points[selected]}/>
    </div>
  )
}

const Total = ({anecdotes, points}) => {
  // element responsible for calculating highest score and rendering relevant info
  var mostPoints = 0
  var highestScorer = 0
    for(var i =0; i<anecdotes.length; i++) {
      if(points[i]>mostPoints)
      {
        mostPoints = points[i]
        highestScorer = i
      }
    }
  if(mostPoints !== 0)
  {
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      "{anecdotes[highestScorer]}" has {points[highestScorer]} votes.
    </div>
  )
  }
  return(
    <div>
      <h1>Anecdote with most votes</h1>
      No votes given, click the vote button to vote for a qoute.
    </div>
  )

}

const Statistic = ({votes}) => {
  return(
    <div>This qoute has {votes} votes.</div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * Math.floor(props.anecdotes.length)))
  const [points, setPoints] = useState(new Array(6+1).join('0').split('').map(parseFloat))

  //function uses math.random to select a random element
  const handleNextClick = () => {
  const ran = Math.floor(Math.random() * Math.floor(props.anecdotes.length))
  if(ran === selected){
    //prevent same anecdote showing twice by recalling function
    return handleNextClick()
  }
    setSelected(ran)
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={selected} points={points}/>
      <Button onClick={handleNextClick} text="next anecdote"/>
      <Button onClick={handleVoteClick} text="vote"/>
      <Total anecdotes={anecdotes} points={points}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)