import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineHome, AiOutlineClockCircle } from "react-icons/ai";
import { RiCommunityFill, RiCompassDiscoverLine } from "react-icons/ri";
import {
  SideMenu,
  SideList,
  SideLogo,
  SideItem,
  SideLogin,
  LogoLogin,
  SideLogout,
} from "./SidebarElement";
import UserInfo from "../UserInfo";
const Sidebar = () => {
  const { userLogin } = useSelector((state) => state.sig);
  return (
    <>
      <SideMenu>
        <p>Menu</p>
        <SideList>
          <SideItem>
            <SideLogo>
              <AiOutlineHome />
            </SideLogo>
            <a href="#home">
              <p>Home</p>
            </a>
          </SideItem>
          <SideItem>
            <SideLogo>
              <RiCommunityFill />
            </SideLogo>
            <a href="#community">
              <p>Community</p>
            </a>
          </SideItem>
          <SideItem>
            <SideLogo>
              <RiCompassDiscoverLine />
            </SideLogo>
            <a href="#discovery">
              <p>Discovery</p>
            </a>
          </SideItem>
          <SideItem>
            <SideLogo>
              <AiOutlineClockCircle />
            </SideLogo>
            <a href="#coming">
              <p>Coming soon</p>
            </a>
          </SideItem>
          <SideItem>
            {userLogin === null ? (
              <>
                <SideLogin to="signin">
                  <LogoLogin />
                  Login
                </SideLogin>
              </>
            ) : (
              <>
                <SideLogout>
                  <UserInfo userLogin={userLogin} />
                </SideLogout>
              </>
            )}
          </SideItem>
        </SideList>
      </SideMenu>
    </>
  );
};

export default Sidebar;
