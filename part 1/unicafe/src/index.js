import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const Average = ({good, neutral, bad}) => {
  //calculates average rating and returns as a statistic element
  const total = good + bad + neutral
  const ave = () =>{
    return (good - bad)/(total + 1)
  }
  return(
    <Statistic text = "Average" value = {ave()}/>
  )
}

const Percentage = ({good, neutral, bad}) => {
  //calculates percentage and returns as a statistic element
  const total = good + bad + neutral
  const percentage = () =>{
    return (good/total*100)
  }
  return(
    <Statistic text = "% Positive" value ={percentage()}/>
  )
}

const Statistic = ({text, value}) => {
  return(
    <tr>
      <td>{text}: {value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good + neutral + bad === 0){
    return(
      <div>No feedback given, click the buttons to give feedback</div>
    )
  }
  return(
  <div>
    <table>
    <Statistic text = "Good" value = {good}/>
    <Statistic text = "Neutral" value = {neutral}/>
    <Statistic text = "Bad" value = {bad}/>
    <Average good={good} neutral={neutral} bad={bad}/>
    <Percentage good={good} neutral={neutral} bad={bad}/>
    </table>
  </div>
  )
  }


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Feedback</h1>
      <Button onClick={handleGoodClick} text = 'good' />
      <Button onClick={handleNeutralClick} text = 'neutral' />
      <Button onClick={handleBadClick} text = 'bad' />
      <h2> Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)