import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchCreditsById } from "services/movie-api";
import { CastItem, CastsList } from "./Cast.styled";

export default function Cast() {
  const [cast, SetCast] = useState();
  const {movieId} = useParams();
  
  useEffect(() => {
    fetchCreditsById(movieId)
      .then(credit => {
        SetCast(credit.cast);
      })
  }, [movieId])

  return (
    <>
      {cast && (<CastsList>
        {cast.map(({id, profile_path, name, character}) => {
          return (
            <CastItem key={id}>
            <img src={profile_path && `https://image.tmdb.org/t/p/original/${profile_path}`} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
            </CastItem>
          )
        })}
      </CastsList>)}
    </>
  )
}