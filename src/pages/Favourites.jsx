import { useContext } from "react";
import { MovieContext } from "../context/FavoriteContext";
import MovieComponent from "../components/MovieComponent";
import { Link } from "react-router";

export default function Favourites() {
  const { favorites, setFavorite } = useContext(MovieContext);

  return (
    <>
      <h1 className="flex justify-center text-xl">
        You can add your Favorites here
      </h1>
      <div className="grid-row-1 md:grid grid-cols-3 gap-2">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieComponent
              movie={movie}
              favorites={favorites}
              setFavorite={setFavorite}
              key={movie.title}
            />
          ))
        ) : (
          <h2 className="flex justify-center">
            No Favorites Yet Add From
            <Link to="/" className="ml-2 link">
              Home
            </Link>
          </h2>
        )}
      </div>
    </>
  );
}
