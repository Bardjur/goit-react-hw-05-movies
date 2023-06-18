import MoviesList from "components/MoviesList";
import { Title } from "./Home.styled";
import { fetchTrendingMovies } from "services/movie-api";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MagnifyingGlass } from 'react-loader-spinner';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [, setQuery] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setQuery('');
    setIsLoading(true)
    fetchTrendingMovies()
      .then((movies) => { setMovies(movies.results) })
      .catch((e) => { toast.error(e.status_message); })
      .finally(() => {setIsLoading(false)});
  },[setQuery])
  
  return (
  <>
    <Title>Trending today</Title>
    {isLoading && <MagnifyingGlass glassColor='#c0efff' color='#3C401D'/>}
    <MoviesList movies={movies}/>
  </>
  )
}
