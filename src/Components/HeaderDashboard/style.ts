import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const MenuHamburger = styled(GiHamburgerMenu)`
  color: var(--rose-600);
  width: 30px;
  height: 30px;

  &:block ~ div {
    display: block;
  }
`;

export const MobileDropdown = styled.div`
  display: none;
  position: absolute;
  right: 10%;
  top: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 200px;

  background-color: var(--white);
  border-bottom-left-radius: 4px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 10;
`;

export const MobileDropdownList = styled.ul`
  list-style: none;
`;

export const MobileDropdownItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid var(--slate-200);
  min-height: 1rem;
  min-width: 1rem;
`;

export const LogoutButton = styled.button`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  padding: 0.25rem;

  background-color: var(--rose-100);
  color: var(--rose-600);
  font-weight: 500;
  border: 1px solid var(--rose-600);
  border-radius: 4px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  height: 80px;
  background-color: --var(white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: space-around;
  padding: 15px 0px;

  @media (max-width: 700px) {
    width: 100%;
    box-sizing: border-box;
    height: 160px;
    flex-direction: column;
    gap: 20px;
    padding: 15px;
  }

  h2 {
    font-size: 2rem;
    font-family: "Inter";
    color: var(--rose-600);
    font-weight: 900;
    align-items: center;
    text-transform: uppercase;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  max-width: 1200px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 90%;
  gap: 1rem;

  div {
    display: none;
  }
`;

export const Dropdown = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 300px;

  ul > li {
    display: none;
    width: 180px;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;

  &:hover ul > li {
    display: block;
  }

  &:hover ul {
    margin-top: 90px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  background-color: var(--white);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--rose-600);
    color: var(--white);
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-weight: 600;
  color: var(--slack-800);
`;

export const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 4px solid var(--rose-600);
  cursor: pointer;
`;
