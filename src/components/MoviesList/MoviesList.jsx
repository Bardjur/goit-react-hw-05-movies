import { List, ListItem, StyledLink } from "./MoviesList.styled";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export default function MoviesList({ movies, fromPages}) {
  const location = useLocation();
  const StartPage = fromPages === "movies" ? "" : "movies/";

  return (
    <List>
      {movies.map(({id, title}, idx) => (
        <ListItem key={id}>
          <StyledLink to={`${StartPage + id.toString()}`} state={{ from: location }}>
            {`${idx + 1}. ${title}`}
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  fromPages: PropTypes.string,
}
