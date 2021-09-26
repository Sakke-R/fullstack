import React from 'react'

const Header = (props) => {
  return (<h1>{props.title}</h1>)
}

const Content = (props) => {
  let ret = [];
  for (let [title, exercises] of props.session){
    ret.push(<p>{title} {exercises}</p>);
    console.log(ret.toString());
  }
  return <>{ret}</>
}

const Total = (props) => {
  let num = 0;
  for(let n of props.session)
    num += n[1];
  return (<p>Number of exercises {num}</p>)
}

function App() {
  const course = 'Half Stack application development'
  const parts = [
    ['Fundamentals of React', 10],
    ['Using props to pass data', 7],
    ['State of a component', 14]]

  return (
    <div>
      <Header title={course}/>
      <Content session={parts}/>
      <Total session={parts}/>
    </div>
  )
}

export default App;
