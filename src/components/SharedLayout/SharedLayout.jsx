import Header from "components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";

export default function SharedLayout() {
  return (
    <>
      <Header/>
      <Container>
        <Outlet />
      </Container>
    </>

  )
}