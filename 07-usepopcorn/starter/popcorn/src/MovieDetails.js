import { useState, useEffect, useRef } from "react";
import StarRating from "./StarRating";
import { useKey } from "./useKey";

function Loader() {
  return <p className="loader">Loading...</p>;
}

const KEY = "25bbb1c7";

function MovieDetails({ selectedId, onHandleClose, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    [userRating],
  );

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRateing = watched.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating: imdbrating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: directior,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbrating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onHandleClose();
  }

  useKey("Escape", onHandleClose);

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching movies");
          }

          const data = await res.json();
          setMovie(data);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [selectedId],
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title],
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onHandleClose}>
              &larr;
            </button>
            <img src={poster} alt={`poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>😁</span>
                {imdbrating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  {" "}
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}{" "}
                </>
              ) : (
                <p>You rated this movie {watchedUserRateing}👌</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
              <p>Starring {actors}</p>
              <p>Directed by {directior}</p>
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
