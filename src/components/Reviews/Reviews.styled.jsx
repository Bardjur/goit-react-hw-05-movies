import styled from "@emotion/styled";

export const ReviewsList = styled.ul`
list-style: none;
  padding: 15px 0;
`;

export const ReviewsItem = styled.li`
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);
  padding: 10px;
  
  &:not(:last-child){margin-bottom: 10px;}

  h4{
    margin-bottom: 10px;
  }

`;