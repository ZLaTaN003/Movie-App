export default function MovieComponent({ movie, favorites, setFavorite }) {
  const isFavorite = favorites.some((favmovie) => favmovie.id === movie.id); // We need this to update the value of the checkbox.So it persist after refresh(coming from localstorage)

  function onFavouriteClick(e) {
    
    e.preventDefault()
    if (isFavorite) {
      setFavorite((prev) =>
        prev.filter((favmovie) => favmovie.id !== movie.id)
      );
    } else {
      setFavorite(prev => [movie,...prev])

    }
  }
  return (
    <div className="flex flex-col  items-center m-5  rounded-xl bg-amber-50 p-3 shadow-lg gap-10">
      <div className="hover-3d rounded-xl relative">
        <img className=" shrink-0 " src={movie.url} alt="movie-logo" />
        <div
          className="favourite flex  tooltip"
          data-tip="Add to Favourite"
          onClick={onFavouriteClick}
        >
          <label className="swap">
            <input type="checkbox"  checked={isFavorite} readOnly/>
            <div className="swap-on text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
            <div className="swap-off text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </label>{" "}
        </div>
      </div>

      <div className="flex gap-2 flex-col">
        <div className="text-xl font-medium text-black">{movie.title}</div>
        <p className="text-gray-500">{movie.description}</p>

        <p className="text-black">{movie.release}</p>
      </div>
    </div>
  );
}
