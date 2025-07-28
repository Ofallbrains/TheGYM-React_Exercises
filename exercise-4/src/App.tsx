import Button from "./Button";
import NavList from "./NavList";
import React from "react";


export default function App() {

  const navItems = ['Home', "Exercise 1", "Exercise 2", "Exercise 3", "Exercise 4", "Exercise 5", "Exercise 6", "Exercise 7", "Exercise 8", "Exercise 9"]

  const [count, setCount] = React.useState(0)

  function add() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <NavList items={navItems} />
      <p>Button has been clicked: { count}</p>
    <Button message="click me" onClick={add}/>
    </>
  )
}