import styled from "styled-components";

export const StyledTrendingMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 1.9rem;
  @media (max-width: 1100px) {
    margin-top: 0;
  }
  @media (max-width: 640px) {
    gap: 1.6rem;
  }
`;

export const StyledTrendingHeader = styled.h2`
  font-family: "Outfit Light";
  font-size: 3.2rem;
  letter-spacing: -0.05rem;
  color: var(--color-white);
  @media (max-width: 640px) {
    font-size: 2rem;
    letter-spacing: -0.031rem;
  }
`;
