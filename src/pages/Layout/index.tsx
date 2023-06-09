import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavbarTitle from "../../components/Navbar/NavbarTitle";
import Container from "../../components/Container";
import NavbarMenuButton from "../../components/Navbar/NavbarMenuButton";
import AppSection from "./AppSection";
import Dropdown from "../../components/Dropdown";
import DropdownItem from "../../components/Dropdown/DropdownItem";

import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";

import { NavbarTitleType } from "../../components/Navbar/@types";
import { DropdownItemType } from "../../components/Dropdown/@types";


const Layout = () => {

  const titleProps: NavbarTitleType = {
    href: "/",
    icon: <MdOutlineMarkUnreadChatAlt />,
  };

  const dropdownItemIProps: DropdownItemType = {
    icon: <FaUserTie />,
    href: "#",
    text: "User",
  };

  const dropdownItemIIProps: DropdownItemType = {
    icon: <IoMdLogOut />,
    href: "#",
    text: "Logout",
  };

  return (
    <div className="layout">
      <AppSection>
        <Navbar>
          <Container classname="navbar-container">
            <NavbarTitle {...titleProps}>pmChat</NavbarTitle>
            <NavbarMenuButton />
            <Dropdown>
              <DropdownItem {...dropdownItemIProps} />
              <DropdownItem {...dropdownItemIIProps} />
            </Dropdown>
          </Container>
        </Navbar>
        <Container classname="main-container">
          <Outlet />
        </Container>
      </AppSection>
    </div>
  );
};

export default Layout;
