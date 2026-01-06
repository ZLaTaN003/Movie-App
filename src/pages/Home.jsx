import MovieComponent from "../components/MovieComponent";
import { useState, useEffect,useContext } from "react";
import { searchMovies, popularMovies } from "../services/movieapi";
import { MovieContext } from '../context/FavoriteContext';

export default function Home() {
  const [searchString, setSearchString] = useState("");
  const [movielist, setMovieList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

    const {favorites,setFavorite} = useContext(MovieContext)

  useEffect(() => {
    let populateMovies = async () => {
      console.log("hey start",movielist)
      

      try {
        let movie_results = await popularMovies();
        let movies = movie_results.map((movie) => ({
          title: movie.title,
          url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          description: movie.overview,
          release: movie.release_date,
          id:`${movie.title}${movie.release}`
        }));

        setMovieList(movies);
      } catch (error) {
        setError("Could not fetch it");
      } finally {
        setLoading(false);
      }
    };
    if (movielist.length === 0){
    populateMovies();

    }
    else{
    console.log("movies not empty",movielist)

    }

  }, []);

  async function handleQuery(e) {
    if (!searchString.trim()) {
      return popularMovies();
    }
    e.preventDefault();

    try {
      console.log("Searching for:", searchString,e);
      setLoading(true);
      let movie_results = await searchMovies(searchString);

      let movies = movie_results.map((movie) => ({
        title: movie.title,
        url: movie.poster_path?`https://image.tmdb.org/t/p/w500${movie.poster_path}`:"https://img.freepik.com/free-photo/cinema-tickets-with-frame-3d-glasses_23-2148133486.jpg?t=st=1767340128~exp=1767343728~hmac=dfd57f7abf1ab9ebedbe48c075456ed2cf1f75b9a0464d8af6fa264b0b3f0ddb&w=1480" ,
        description: movie.overview,
        release: movie.release_date,
        id:`${movie.title}-${movie.release_date}`
      }));
      setMovieList(movies);
    } catch (error) {
      setError("Could not get search reuslts");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div className="home m-10">
        <div className="srch m-5">
          <form
            action=""
            className="flex justify-center gap-2"
            onSubmit={handleQuery}
          >
            <input
              type="text"
              placeholder="Search Movie"
              id="search-inp"
              value={searchString}
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              className="border-5"
            />
            <button type="submit" className="btn bg-red-500">
              Search
            </button>
          </form>
        </div>

        {loading ? (
          <span className="loading loading-ball loading-xl size-20 bg-amber-400"></span>
        ) : (
          <div className="grid-row-1 md:grid grid-cols-3 gap-2">
            {movielist.map((movie) => (
              <MovieComponent movie={movie} favorites={favorites} setFavorite={setFavorite} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
