import NavList from "./NavList";

export default function App() {
const navItems = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

  return (
    <NavList items={navItems}/>
  )
}
