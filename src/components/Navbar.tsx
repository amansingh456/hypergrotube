import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BiSolidUserCheck } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { useAppState } from "../provider/StateProvider";
import styled from "styled-components";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { setState } = useAppState();
  const tubeToken = localStorage.getItem("tubeToken") || "";

  const LoggedOut = () => {
    localStorage.removeItem("tubeToken");
    setState((prev:any) => !prev);
  };

  return (
    <Container className="sticky top-0 h-14 z-10">
      <Wrapper className="flex items-center justify-end h-full px-5 relative text-5">
        <Search className="flex m-auto">
          <span style={{ fontFamily: "Lugrasimo, cursive", fontWeight: "bold", letterSpacing: "1px" }}>HyperGroTube</span>
        </Search>
        {tubeToken ? (
          <div className="flex gap-x-2.5 mr-0">
            <button className="px-1 py-1 bg-transparent border border-lime-500 text-lime-500 rounded-1 font-semibold cursor-pointer flex items-center gap-1 text-5">
              <BiSolidUserCheck />
            </button>
            <button onClick={LoggedOut} className="px-1 py-1 bg-transparent border border-rose-500 text-rose-500 rounded-1 font-semibold cursor-pointer flex items-center gap-1 text-5">
              <HiOutlineLogout />
            </button>
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="px-1 py-1 bg-transparent border border-rose-500 text-rose-500 rounded-1 font-semibold cursor-pointer flex items-center gap-1 text-5">
              <RiAccountCircleFill />
              <span className="hidden">SIGN IN</span>
            </button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div`
  @media all and (min-width: 260px) and (max-width: 360px) {
    margin-left: -90px;
    font-size: 13px;
  }
  @media all and (min-width: 361px) and (max-width: 460px) {
    margin-left: -60px;
    font-size: 14px;
  }
  @media all and (min-width: 461px) and (max-width: 560px) {
    margin-left: -40px;
    font-size: 14px;
  }
  @media all and (min-width: 561px) and (max-width: 660px) {
    margin-left: -20px;
    font-size: 16px;
  }
`;

const Search = styled.div`
  width: 20%;
  color: ${({ theme }) => theme.text};
`;