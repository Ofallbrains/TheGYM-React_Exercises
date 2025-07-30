import { useState } from "react"

import NavList from "./NavList";


export default function App() {
  const navItems = ['Home', "Exercise 1", "Exercise 2", "Exercise 3", "Exercise 4", "Exercise 5", "Exercise 6", "Exercise 7", "Exercise 8", "Exercise 9"]
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')


  function handleClick(e: React.FormEvent) {
    e.preventDefault(); // prevent page reload
    alert(`Hello ${firstName} ${lastName}`);
  }

  return (
    <>
      <NavList
        items={navItems}
      />
      <form className="form">
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <button
          onClick={handleClick}
        >Greet me</button>
      </form>
    </>
  )
}
