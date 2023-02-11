import worldpic from "../images/world-logo.png"

export default function NavBar() {
  return (
    <nav>
      <img src={worldpic} className="world-icon"></img>
      <h1 className="nav-title">Clay Travel Journal</h1>
    </nav>
  )
}