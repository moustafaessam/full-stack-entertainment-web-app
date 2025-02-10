import styled from "styled-components";

type StyledPosterCardProps = {
  sizes?: {
    minWidthDesktop?: string;
    minWidthTablet?: string;
    minWidthMobile?: string;
    heightDesktop?: string;
    heightTablet?: string;
    heightMobile?: string;
  };
  backgroundImage: string;
};

export const StyledPosterCard = styled.div<StyledPosterCardProps>`
  cursor: pointer;
  background-color: aliceblue;
  border-radius: 0.8rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  min-width: ${(props) =>
    props.sizes?.minWidthDesktop ? props.sizes.minWidthDesktop : "47rem"};
  height: ${(props) =>
    props.sizes?.heightDesktop ? props.sizes.heightDesktop : "23rem"};
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;

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

  @media (max-width: 1100px) {
    min-width: ${(props) =>
      props.sizes?.minWidthTablet ? props.sizes.minWidthTablet : "47rem"};
    height: ${(props) =>
      props.sizes?.heightTablet ? props.sizes.heightTablet : "23rem"};
  }

  @media (max-width: 640px) {
    min-width: ${(props) =>
      props.sizes?.minWidthMobile ? props.sizes.minWidthMobile : "24rem"};
    height: ${(props) =>
      props.sizes?.heightMobile ? props.sizes.heightMobile : "14rem"};
  }
`;

export const PosterPlayContainer = styled.div`
  position: absolute;
  z-index: 10;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 11.7rem;
  height: 4.8rem;
  border-radius: 3rem;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.9rem;
  display: flex;
  gap: 1.9rem;
  align-items: center;
`;

export const PosterPlayIcon = styled.img``;

export const PosterPlayText = styled.p`
  font-family: "Outfit Medium";
  font-size: 1.8rem;
  color: var(--color-white);
`;

export const PosterDetailsContainer = styled.div`
  height: 10rem;
  width: 100%;
  padding: 2.4rem;
  @media (max-width: 640px) {
    height: 7rem;
    padding: 1.6rem;
  }
`;

export const PosterDetailsInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: fit-content;
  @media (max-width: 640px) {
    gap: 0.4rem;
  }
`;

export const PosterDetailsFirstPar = styled.div`
  align-items: center;
  display: flex;
  gap: 0.8rem;
  font-family: "Outfit Light";
  font-size: 1.5rem;
  color: var(--color-white);
  opacity: 75%;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

export const PosterDetailsTextFirstPar = styled.p``;

export const PosterDetailCircle = styled.div`
  width: 0.3rem;
  height: 0.3rem;
  background-color: var(--color-white);
  border-radius: 50%;
  opacity: 50%;
`;

export const PosterTypeImage = styled.img`
  margin-right: 0.6rem;
`;

export const PosterTextSecondPar = styled.p`
  text-transform: capitalize;
  color: var(--color-white);
  font-family: "Outfit Medium";
  font-size: 2.4rem;
  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;
