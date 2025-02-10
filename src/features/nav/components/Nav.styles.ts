import styled from "styled-components";

export const StyledNavMainContainer = styled.div`
  padding: 3.2rem 3.6rem 3.2rem 3.2rem;
  height: 100vh;
  width: fit-content;
  @media (max-width: 1100px) {
    padding: 2.3rem 2.4rem 3.3rem 2.5rem;
    min-height: auto;
    height: fit-content;
    width: auto;
  }
  @media (max-width: 640px) {
    padding: 0;
    margin-bottom: 2.4rem;
  }
`;

export const StyledNavMainInnerContainer = styled.nav`
  background-color: var(--color-darkBlue);
  min-width: 9.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-radius: 2rem;
  position: relative;
  @media (max-width: 1100px) {
    width: auto;
    min-width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    height: 7.2rem;
    padding: 0 2.4rem 0 2.4rem;
  }
  @media (max-width: 640px) {
    height: 5.6rem;
    border-radius: 0;
    padding: 0 1.6rem 0 1.6rem;
  }
`;

export const StyledNavLogoIcon = styled.img`
  margin-top: 3.6rem;
  @media (max-width: 1100px) {
    margin-top: 0;
  }
`;

export const StyledNavIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 7.5rem;
  @media (max-width: 1100px) {
    flex-direction: row;
    gap: 3.2rem;
    margin-top: 0;
  }
  @media (max-width: 640px) {
    gap: 2.4rem;
  }
`;

export const StyledAvatarImg = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 0;
  margin-bottom: 3.6rem;
  @media (max-width: 1100px) {
    position: static;
    margin-bottom: 0;
    width: 3.2rem;
    height: 3.2rem;
  }
  @media (max-width: 1100px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
