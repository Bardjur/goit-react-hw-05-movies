import MoviesList from "components/MoviesList";
import { fetchMoviesQuery } from "services/movie-api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "components/SearchBar";
import { toast } from "react-toastify";
import { MagnifyingGlass } from 'react-loader-spinner';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query.get("query")) {
      return
    }
    setIsLoading(true)
    fetchMoviesQuery(query.get("query"))
      .then((movies) => { setMovies(movies.results) })
      .catch((e) => { toast.error(e.status_message); })
      .finally(() => {setIsLoading(false)});
  }, [query])

  useEffect(() => {

  },[])
  
  const changeQuery = (query) => {
    setQuery({query});
  }
  
  return (
    <>
      <SearchBar onSubmit={changeQuery} input={query.get("query") ?? ''} />
      {isLoading && <MagnifyingGlass glassColor='#c0efff' color='#3C401D'/>}
      {movies.length !==0 && <MoviesList movies={movies} fromPages="movies" />}
      {query.size !==0 && !movies.length && !isLoading && <h2>There is nothing for this request</h2>}
    </>
  )
}
