import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  &.active svg {
    fill: var(--color-white);
  }
`;

export const StyledSvgNavIcon = styled.svg`
  fill: var(--color-blue);
  cursor: pointer;
  &:hover {
    fill: var(--color-red) !important;
  }
`;

export const StyledPathNavIcon = styled.path``;
