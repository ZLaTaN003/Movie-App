import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar";
import MovieContextProvider from "./context/FavoriteContext";
export default function App () {
  return (
    <>
    <MovieContextProvider>

    <NavBar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>

    </MovieContextProvider>

    </>
    
  );
}
