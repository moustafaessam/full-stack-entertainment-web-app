import {
  PosterDetailsFirstPargSeprator,
  PosterImageContainer,
  PosterListContainer,
  PosterListDetailsFirstPargContainer,
  PosterListDetailsImg,
  PosterListDetailsTextFirstParg,
  PosterListImage,
  PosterSecondPargText,
} from "./Poster.styles";
import {
  StyledBookMarkContainer,
  StyledTrendingBookMark,
} from "../../Bookmark/Bookmark.styles";
import { useState } from "react";
import {
  PosterPlayContainer,
  PosterPlayIcon,
  PosterPlayText,
} from "../../PosterCard/PosterCard.styles";
import { useLocation } from "react-router-dom";

type PosterProps = {
  info: {
    title: string;
    id: string;
    media_type: string;
    vote_average: string;
    backdrop_path: string;
    release_date: string;
    name: string;
    first_air_date: string;
  };
};

export default function Poster({ info }: PosterProps) {
  const [isBookMark, setIsBookMark] = useState(false);
  const [showPlay, setShowPlay] = useState(false);
  const location = useLocation();

  const mediaType =
    info.media_type || location.pathname.split("/")[1] === "movies"
      ? "movie"
      : location.pathname.split("/")[1] === "tv-series"
      ? "tv"
      : "N/A";
  const releaseDate = info.release_date
    ? info.release_date.split("-")[0]
    : info.first_air_date
    ? info.first_air_date.split("-")[0]
    : "N/A";
  function handleClick() {
    setIsBookMark((pre) => !pre);
  }
  if (mediaType === "N/A") return;
  return (
    <PosterListContainer
      onMouseEnter={() => setShowPlay(true)}
      onMouseLeave={() => setShowPlay(false)}
    >
      <PosterImageContainer>
        <PosterListImage
          src={
            info.backdrop_path
              ? `https://image.tmdb.org/t/p/original${info.backdrop_path}`
              : "/images/not-found.jpeg"
          }
        />
        <StyledBookMarkContainer
          style={{ top: "1.6rem", right: "1.6rem" }}
          onClick={handleClick}
        >
          <StyledTrendingBookMark
            src={`/images/icon-bookmark-${isBookMark ? "full" : "empty"}.svg`}
          />
        </StyledBookMarkContainer>
        {showPlay && (
          <PosterPlayContainer>
            <PosterPlayIcon src="/images/icon-play.svg" />
            <PosterPlayText>Play</PosterPlayText>
          </PosterPlayContainer>
        )}
      </PosterImageContainer>

      <PosterListDetailsFirstPargContainer>
        <PosterListDetailsTextFirstParg>
          {releaseDate}
        </PosterListDetailsTextFirstParg>
        <PosterDetailsFirstPargSeprator />
        <PosterListDetailsTextFirstParg>
          <PosterListDetailsImg
            src={
              mediaType === "movie"
                ? `/images/icon-category-movie.svg`
                : `/images/icon-category-tv.svg`
            }
          />
          {mediaType}
        </PosterListDetailsTextFirstParg>
        <PosterDetailsFirstPargSeprator />
        <PosterListDetailsTextFirstParg>
          {info.vote_average}
        </PosterListDetailsTextFirstParg>
      </PosterListDetailsFirstPargContainer>
      <PosterSecondPargText>
        {info.title || info.name || "N/A"}
      </PosterSecondPargText>
    </PosterListContainer>
  );
}
