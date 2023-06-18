import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeadBlock = styled.header`
  box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.75);
`;

export const Nav = styled.nav`
  padding: 0 25px;
  max-width: 950px;
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  color:#3C401D;
  display: inline-block;
  padding: 15px 10px;
  font-weight: 700;
  text-decoration: none;
  &:hover, 
  &.active{color:#736A3D;}
`;