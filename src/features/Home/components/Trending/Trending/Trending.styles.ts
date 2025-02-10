import styled from "styled-components";

export const StyledTrendingOuterContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 4rem;
  scrollbar-width: none;
  scrollbar-color: initial;
  @media (max-width: 640px) {
    gap: 1.6rem;
  }
  /* Custon ScrollBar */
  &::-webkit-scrollbar {
    background-color: initial;
  }
`;
