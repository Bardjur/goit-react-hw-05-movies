import { useState, useEffect } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { fetchMovieById } from "services/movie-api";
import { WrapperBlock, DetailsWrap, Poster, Title2, Title3, Title4, Text, StyledLink, GoBackLink, MoreInfoLink } from "./MovieDetails.styled";
import { TiArrowBack } from 'react-icons/ti';
import { toast } from "react-toastify";

export default function Movies() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const goBackPath = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieById(movieId)
      .then(movie => {
        setMovieDetails(movie);
      })
      .catch((e) => { toast.error(e.status_message); });
  }, [movieId])
  
  const { poster_path, title, vote_average, overview, } = movieDetails;
  const genres = () => movieDetails.genres.map(item => item.name).join(' ');


  return (<>
    <GoBackLink to={goBackPath}><TiArrowBack /> Go back</GoBackLink>

    {Object.keys(movieDetails).length
      ? (<>
      <WrapperBlock>
          <Poster src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
          <DetailsWrap>
            <Title2>{title}</Title2>
            <Text>User score: {vote_average}</Text>
            <Title3>Overview</Title3>
            <Text>{overview}</Text>
            <Title4>Genres</Title4>
            <Text>{genres()}</Text>
          </DetailsWrap>
      </WrapperBlock>

      <MoreInfoLink>
        <Title4>Additional information</Title4>
        <StyledLink to="cast" state={{ from: location.state?.from ?? '/movies' }}>Cast</StyledLink>
        <StyledLink to="reviews" state={{ from: location.state?.from ?? '/movies' }}>Reviews</StyledLink>
      </MoreInfoLink>

      <Outlet/>
      </>)
      : <Title2>Nothing found</Title2>
      }
  </>)
}
