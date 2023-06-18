import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 10px 0 20px;
`;

export const ListItem = styled.li`
  background-color: #A8B5BF;
  display: block;
  border-radius: 5px;
  &:hover {
    background-color:#736A3D;
    a{
      color:#A8B5BF;
    }
  }
  &:not(:last-child){
    margin-bottom: 5px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 10px;
  font-weight: 600;
  text-decoration: none;
  color:#736A3D;
`;