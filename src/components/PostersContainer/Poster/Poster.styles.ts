import styled from "styled-components";

export const PosterListContainer = styled.div`
  justify-self: center;
  max-width: 28rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 1100px) {
    max-width: 22rem;
  }
  @media (max-width: 640px) {
    max-width: 16.4rem;
  }
`;

export const PosterImageContainer = styled.div`
  position: relative;
  height: 17.4rem;
  border-radius: 0.8rem;
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(128, 128, 128, 0.3);
    z-index: 5;
    border-radius: 0.8rem;
    pointer-events: none;
  }
  margin-bottom: 0.8rem;
  @media (max-width: 1100px) {
    height: 14rem;
  }
  @media (max-width: 1100px) {
    height: 11rem;
  }
`;

export const PosterListImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
`;

export const PosterListDetailsFirstPargContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  opacity: 75%;
  align-items: center;
  color: var(--color-white);
  font-family: "Outfit Light";
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
`;

export const PosterListDetailsTextFirstParg = styled.p``;

export const PosterListDetailsImg = styled.img`
  margin-right: 0.5rem;
`;

export const PosterDetailsFirstPargSeprator = styled.div`
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background-color: var(--color-white);
`;

export const PosterSecondPargText = styled.p`
  font-family: "Outfit Medium";
  font-size: 1.8rem;
  color: var(--color-white);
  text-transform: capitalize;
`;
