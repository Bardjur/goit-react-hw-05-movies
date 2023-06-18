import { HeadBlock, Nav, StyledLink } from "./Header.styled";

export default function Header(){
  return (
    <HeadBlock>
      <Nav>
        <StyledLink to="/goit-react-hw-05-movies">Home</StyledLink>
        <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
      </Nav>
    </HeadBlock>
  )
}