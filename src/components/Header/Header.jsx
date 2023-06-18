import { HeadBlock, Nav, StyledLink } from "./Header.styled";

export default function Header(){
  return (
    <HeadBlock>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
    </HeadBlock>
  )
}