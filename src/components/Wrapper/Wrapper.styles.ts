import styled from "styled-components";

export const StyledWrapper = styled.div`
  /* flex-grow: 1; */
  max-width: calc(100% - 16.4rem);
  width: 100%;
  @media (max-width: 1100px) {
    max-width: 100%;
    margin-left: 2.5rem;
  }
  @media (max-width: 640px) {
    margin-left: 1.6rem;
  }
`;
