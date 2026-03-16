import { HeaderContainer, HeaderLogo } from "./header.styles";
import logo from "../../images/logo.png";
import { Typography } from "@mui/material";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="logo" />
      <Typography>Coming Soon</Typography>
    </HeaderContainer>
  );
}