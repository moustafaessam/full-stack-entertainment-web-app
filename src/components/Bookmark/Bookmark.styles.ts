import styled from "styled-components";

export const StyledBookMarkContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: #10141e94;
  border-radius: 50%;
  position: absolute;
  right: 2.4rem;
  top: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 640px) {
    top: 0.8rem !important;
    right: 0.8rem !important;
  }
`;

export const StyledTrendingBookMark = styled.img``;
