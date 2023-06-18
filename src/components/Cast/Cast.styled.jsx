import styled from "@emotion/styled";

export const CastsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -5px;
  padding: 15px 0;
`;

export const CastItem = styled.li`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: calc( 100vh/4);
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);
  img {
    padding-bottom: 5px;
  }
  p {
    padding: 0 5px 5px;
  }
  p:first-of-type{
    margin-top: auto;
  }
`;