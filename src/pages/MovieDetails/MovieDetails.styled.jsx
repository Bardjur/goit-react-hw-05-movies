import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const GoBackLink = styled(Link)`
  display: inline-block;
  padding: 10px;
  font-weight: 600;
  text-decoration: none;
  color:#736A3D;
  border: 1px solid #3C401D;
  border-radius: 7px;
  margin-bottom: 10px;
  &:hover{
    background-color: #736A3D;
    color:#3C401D;
    svg {transform: scale(1.5)}
  }
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

export const WrapperBlock = styled.div`
  display: flex;
`;

export const Poster = styled.img`
  display: block;
  max-width: 250px;
`;

export const DetailsWrap = styled.div`
  margin-left: 20px;
  color: #3C401D;
`;

export const Title2 = styled.h2`
  margin-top: 15px;
`;
export const Title3 = styled.h3`
  margin-top: 15px;
`;
export const Title4 = styled.h4`
  margin-top: 15px;
`;

export const Text = styled.p`
  margin-top: 15px;
`;

export const MoreInfoLink = styled.div`
  border: 1px solid #3C401D;
  border-left: none;
  border-right: none;
  margin: 15px auto;
  color: #3C401D;
`;