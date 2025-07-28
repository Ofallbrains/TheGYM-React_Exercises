
import Button from "./Button"
import NavList from "./NavList"

export default function App() {

  const handleClick = () => {
    alert('Clicked!')
  }

  const navItems = ['Home', "Exercise 1", "Exercise 2", "Exercise 3", "Exercise 4", "Exercise 5", "Exercise 6", "Exercise 7", "Exercise 8", "Exercise 9"]
  return (
    <>
      <NavList items={navItems} />
      <Button message="Click Me!" onClick={handleClick} />
    </>
  )
}