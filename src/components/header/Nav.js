import React from "react";
import styled from "styled-components";
import Media from "../../Media";
import logo from "./logo.png";
import { ReactComponent as Hamburger } from "./hamburger.svg";
import { ReactComponent as Phone } from "./phone.svg";
import NavItems from "./NavItems";
import { mediaQueries, mediaQueriesMax } from "../../mediaQueries";
import Button from "../common/Button";
import UserNav from "../common/UserNav";

function Nav() {
  return (
    <HeaderWrapper>
      <Media pc>
        <Logo src={logo} alt="logo" />
        <NavItems />
        <Button
          label="Request a call back"
          icon={<Phone />}
          buttonType="secondary"
          buttonWidth={"200px"}
        />
        <UserNav label={"VB"} />
      </Media>
      <Media mobile>
        <MenuLogo>
          <Hamburger alt="logo" />
        </MenuLogo>
        <MobileWrapper>
          <Logo src={logo} alt="logo" />
          <Button label="Login/Signup" buttonWidth="120px" />
        </MobileWrapper>
      </Media>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.header`
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const MenuLogo = styled.div`
  margin-right: 1em;
  svg {
    width: 25px;
  }
`;
const Logo = styled.img`
  display: flex;
  ${mediaQueries("md")`
    width: 200px;
  `};
  ${mediaQueriesMax("md")`
    width: 140px;
  `};
`;

export default Nav;
