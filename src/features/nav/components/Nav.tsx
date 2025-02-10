import NavIcons from "../../../components/NavIcons/NavIcons";
import {
  StyledAvatarImg,
  StyledNavIconsContainer,
  StyledNavLogoIcon,
  StyledNavMainContainer,
  StyledNavMainInnerContainer,
} from "./Nav.styles";

export default function Nav() {
  return (
    <StyledNavMainContainer>
      <StyledNavMainInnerContainer>
        <StyledNavLogoIcon src="/images/logo.svg" />
        <StyledNavIconsContainer>
          <NavIcons />
        </StyledNavIconsContainer>
        <StyledAvatarImg src="/images/image-avatar.png" />
      </StyledNavMainInnerContainer>
    </StyledNavMainContainer>
  );
}
