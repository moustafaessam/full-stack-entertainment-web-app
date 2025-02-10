import { useState } from "react";
import {
  PosterDetailCircle,
  PosterDetailsContainer,
  PosterDetailsFirstPar,
  PosterDetailsInnerContainer,
  PosterDetailsTextFirstPar,
  PosterPlayContainer,
  PosterPlayIcon,
  PosterPlayText,
  PosterTextSecondPar,
  PosterTypeImage,
  StyledPosterCard,
} from "./PosterCard.styles";
import Bookmark from "../Bookmark/Bookmark";

type PosterCardProps = {
  sizes?: {
    minWidthDesktop?: string;
    minWidthTablet?: string;
    minWidthMobile?: string;
    heightDesktop?: string;
    heightTablet?: string;
    heightMobile?: string;
  };
  info: {
    title: string;
    media_type: string;
    vote_average: string;
    backdrop_path: string;
    release_date: string;
  };
};

export default function PosterCard({ sizes, info }: PosterCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPlay, setShowPlay] = useState(false);

  const releaseDate = info.release_date
    ? info.release_date.split("-")[0]
    : ["N/A"];
  return (
    <StyledPosterCard
      sizes={sizes}
      backgroundImage={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
      onMouseEnter={() => setShowPlay(true)}
      onMouseLeave={() => setShowPlay(false)}
    >
      <Bookmark isBookmarked={isBookmarked} setIsBookmarked={setIsBookmarked} />
      <PosterDetailsContainer>
        <PosterDetailsInnerContainer>
          <PosterDetailsFirstPar>
            <PosterDetailsTextFirstPar>{releaseDate}</PosterDetailsTextFirstPar>
            <PosterDetailCircle />
            <PosterDetailsTextFirstPar>
              <PosterTypeImage
                src={`/images/icon-category-${
                  info.media_type === "movie" ? "movie" : "tv"
                }.svg`}
              />
              {info.media_type}
            </PosterDetailsTextFirstPar>
            <PosterDetailsTextFirstPar>
              {info.vote_average}
            </PosterDetailsTextFirstPar>
          </PosterDetailsFirstPar>
          <PosterTextSecondPar>
            {info.title ? info.title : "N/A"}
          </PosterTextSecondPar>
        </PosterDetailsInnerContainer>
      </PosterDetailsContainer>
      {showPlay && (
        <PosterPlayContainer>
          <PosterPlayIcon src="/images/icon-play.svg" />
          <PosterPlayText>Play</PosterPlayText>
        </PosterPlayContainer>
      )}
    </StyledPosterCard>
  );
}
