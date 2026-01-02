import { Link } from "react-router";

export default function NavBar() {
  return (
  

    <div className="navbar justify-between">
      <Link to="/" className="btn btn-ghost text-xl">Home</Link>
      <Link to="/favourites" className="btn btn-ghost text-xl">Favourites</Link>
    </div>


    
  )
}
