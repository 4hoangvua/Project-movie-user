import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import SearchMovie from "./SearchMovie";
import NavBar from "./NavBar";
import ContentPage from "./ContentPage";
import { useDispatch } from "react-redux";
import { getMovieBanner } from "../../reducers/banner";
import { getListMovie } from "../../reducers/listMovie";
import { getShowTimeTheaterInfo } from "../../reducers/showTime";
import ShowTimes from "./ShowTimes";
import {
  Container,
  ContainerHome,
  LeftHome,
  RightHome,
  LeftContent,
  LeftSide,
  LeftPage,
  ContainerShowTime,
} from "./HomePageElement";
import { resetToken } from "../../reducers/singin";
const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieBanner());
    dispatch(getListMovie());

    dispatch(getShowTimeTheaterInfo());
    dispatch(resetToken());
  }, []);
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
        <ContainerShowTime>
          <ShowTimes />
        </ContainerShowTime>
      </Container>
    </>
  );
};

export default HomePage;
