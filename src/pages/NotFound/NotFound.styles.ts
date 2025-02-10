import styled from "styled-components";

export const NotFoundContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotFoundText = styled.p`
  font-family: "Outfit Medium";
  color: var(--color-white);
  font-size: 4rem;
  @media (max-width: 640px) {
    font-size: 3rem;
  }
`;

export const NotFoundTextRed = styled.span`
  color: var(--color-red);
`;
