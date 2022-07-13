import React from "react";
import Sidebar from "./Sidebar";
import SearchMovie from "./SearchMovie";
import NavBar from "./NavBar";
import ContentPage from "./ContentPage";
import {
  Container,
  ContainerHome,
  LeftHome,
  RightHome,
  LeftContent,
  LeftSide,
  LeftPage,
} from "./HomePageElement";
const HomePage = () => {
  return (
    <>
      <Container>
        <ContainerHome>
          <LeftHome>
            <NavBar />
            <LeftContent>
              <LeftSide>
                <Sidebar />
              </LeftSide>
              <LeftPage>
                <ContentPage />
              </LeftPage>
            </LeftContent>
          </LeftHome>
          <RightHome>
            <SearchMovie />
          </RightHome>
        </ContainerHome>
      </Container>
    </>
  );
};

export default HomePage;
