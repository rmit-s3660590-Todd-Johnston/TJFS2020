import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  //simple element for splitting up parts of course objects
  return(
    <div>
      <Part parts = {props.course.parts[0]}/>
      <Part parts = {props.course.parts[1]}/>
      <Part parts = {props.course.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.parts.name} {props.parts.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  //element that shows total number of exercises from course
  let total = 0
  props.course.parts.forEach(course => {
    total+= course.exercises
  })
  return(
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))