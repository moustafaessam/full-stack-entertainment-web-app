import styled from "styled-components";

export const StyledSearchMainContainer = styled.div`
  margin-top: 6.4rem;
  margin-bottom: 1.4rem;
  display: flex;
  gap: 2.4rem;
  width: fit-content;
  @media (max-width: 1100px) {
    margin-top: 0;
    margin-bottom: 3.3rem;
  }
  @media (max-width: 640px) {
    margin-top: 0;
    margin-bottom: 2.4rem;
    gap: 1.6rem;
  }
`;

export const StyledSearchIcon = styled.img``;

export const StyledSearchInput = styled.input`
  background-color: initial;
  border: none;
  outline: none;
  color: var(--color-white);
  font-family: "Outfit Light";
  font-size: 2.4rem;
  caret-color: var(--color-red);

  &::placeholder {
    opacity: 49.79%;
  }
  @media (max-width: 640px) {
    font-size: 1.6rem;
  }
`;

export const StyledSearchDivider = styled.hr`
  background-color: var(--color-blue);
  bottom: 0;
  height: 0.1rem;
  margin-left: 5.6rem;
  margin-right: 3.6rem;
  border: none;
  @media (max-width: 1100px) {
    display: none;
  }
`;
