import Button from "./Button";
import NavLists from "./NavLists";


export default function App() {
const navItems = ['Home', "Exercise 1", "Exercise 2", "Exercise 3", "Exercise 4", "Exercise 5", "Exercise 6", "Exercise 7", "Exercise 8", "Exercise 9"]

  function handleClick(text: string) {
   alert(`You clicked ${text}`)
 }
  return (

    <div>
      <NavLists items={navItems}/>
      <Button text="Button 1" onClick={() =>handleClick('Button 1')}/>
      <Button text="Button 2" onClick={() =>handleClick('Button 2')}/>
      <Button text="Button 3" onClick={() =>handleClick('Button 3')}/>

    </div>
  )
}

