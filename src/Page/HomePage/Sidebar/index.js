import React from "react";
import { AiOutlineHome, AiOutlineClockCircle } from "react-icons/ai";
import { RiCommunityFill, RiCompassDiscoverLine } from "react-icons/ri";
import {
  SideMenu,
  SideList,
  SideLogo,
  SideItem,
  SideLogin,
} from "./SidebarElement";
const Sidebar = () => {
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
            <SideLogin to="singin">Login</SideLogin>
          </SideItem>
        </SideList>
      </SideMenu>
    </>
  );
};

export default Sidebar;
