import React, {  useEffect } from "react";
import styled from "styled-components";
import tube from "../img/download.png";
import {
  MdOutlineExplore,
  MdUnsubscribe,
  MdDarkMode,
  MdHelp,
  MdOutlineLiveTv,
  MdVideoLibrary,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { FaHistory, FaMusic } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { SiFacebookgaming } from "react-icons/si";
import { Link } from "react-router-dom";
import { BiSolidUserCheck } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import {  useAppState } from "../provider/StateProvider";

interface MenuProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}



const Menu: React.FC<MenuProps> = ({ darkMode, setDarkMode }) => {
  const tubeToken = localStorage.getItem("tubeToken") || "";
  const { state } = useAppState();

  useEffect(() => {}, [state]);

  return (
    <Container className="text-sm sticky left-0 top-0">
      <div className="px-5 py-4">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="flex items-center gap-1 font-bold mb-6">
            <img src={tube} className="h-14" alt="Tube Logo" />
          </div>
        </Link>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <AiFillHome />
          <span className="hiddenu">Home</span>
        </Item>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <MdOutlineExplore />
          <span className="hiddenu">Explore</span>
        </Item>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <MdUnsubscribe />
          <span className="hiddenu">Subscriptions</span>
        </Item>
        <Hr  className="my-4"/>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <MdVideoLibrary />
          <span className="hiddenu">Library</span>
        </Item>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <FaHistory />
          <span className="hiddenu">History</span>
        </Item>
        <Hr  className="my-4"/>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          {tubeToken ? (
            <button className="px-1 py-1 bg-transparent border border-lime-500 text-lime-500 rounded-1 font-semibold cursor-pointer flex items-center gap-1 text-5">
              <BiSolidUserCheck />
              <span className="hiddenu">Hello, User</span>
            </button>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button className="px-1 py-1 bg-transparent border border-rose-500 text-rose-500 rounded-1 font-semibold text-5 cursor-pointer flex items-center gap-1">
                <RiAccountCircleFill />
                <span className="hiddenu" >SIGN IN</span>
              </button>
            </Link>
          )}
        </Item>
        <Hr className="my-4" />
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <FaMusic />
          <span className="hiddenu">Music</span>
        </Item>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <MdOutlineSportsBasketball />
          <span className="hiddenu">Sports</span>
        </Item>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <SiFacebookgaming />
          <span className="hiddenu">Gaming</span>
        </Item>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1  text-xl">
          <MdOutlineLiveTv />
          <span className="hiddenu">Live</span>
        </Item>
        <Hr className="my-4"/>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1 text-xl">
          <MdHelp />
          <span className="hiddenu">Help</span>
        </Item>
        <Item className="flex items-center justify-normal gap-5 cursor-pointer py-1 text-xl" onClick={() => setDarkMode(!darkMode)}>
          <MdDarkMode />
          <span className="hiddenu">{darkMode ? "Light " : "Dark "}mode</span>
        </Item>
      </div>
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

const Item = styled.div`
  
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }

  @media all and (min-width: 260px) and (max-width: 800px) {
    justify-content: center;
  }
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
