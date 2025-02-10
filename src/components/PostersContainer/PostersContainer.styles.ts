import styled from "styled-components";

export const PostersContainerMainContainer = styled.section`
  margin-top: 3rem;
  margin-right: 3.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (max-width: 1100px) {
    margin-right: 2.4rem;
    gap: 2.4rem;
  }
  @media (max-width: 640px) {
    margin-right: 1.6rem;
    margin-top: 2.4rem;
  }
`;

export const PostersContainerHeader = styled.h1`
  font-family: "Outfit Light";
  font-size: 3.2rem;
  letter-spacing: -0.05rem;
  color: var(--color-white);
  @media (max-width: 640px) {
    font-size: 2rem;
    letter-spacing: -0.031rem;
  }
`;

export const PostersListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3.2rem;
  column-gap: 4rem;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2.4rem;
    column-gap: 3rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }
`;
