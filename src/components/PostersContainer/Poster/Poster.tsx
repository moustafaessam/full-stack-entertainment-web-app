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
import { useEffect, useState } from "react";
import {
  PosterPlayContainer,
  PosterPlayIcon,
  PosterPlayText,
} from "../../PosterCard/PosterCard.styles";
import { useLocation } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import supabase from "../../../supabase/supabaseClient";

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
    if (isBookMark === false) {
      addBookmarkMutation.mutate({ info });
    } else {
      removeBookmarkMutation.mutate({ info });
    }
  }

  const { data } = useQuery({
    queryKey: ["getbookmarks"],
    queryFn: async () => {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      const currentUserId = sessionData?.session?.user.id;
      if (!currentUserId) {
        throw new Error("No authenticated user found.");
      }
      const { data, error } = await supabase
        .from("Bookmark")
        .select("*")
        .eq("user_id", currentUserId);

      if (error) throw error;

      return data;
    },
  });

  useEffect(() => {
    data?.map((movie) => {
      if (Number(movie.movie_id) === Number(info.id)) {
        setIsBookMark(true);
      }
    });
  }, [setIsBookMark]);

  const addBookmarkMutation = useMutation({
    mutationFn: async (data: PosterProps) => {
      // Retrieve the current session from Supabase.
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      // Extract the current user's ID from the session.
      const currentUserId = sessionData?.session?.user.id;
      if (!currentUserId) {
        throw new Error("No authenticated user found.");
      }

      // Check if the bookmark already exists for this user and movie.
      const { data: existingBookmark, error: selectError } = await supabase
        .from("Bookmark")
        .select("*")
        .eq("user_id", currentUserId)
        .eq("movie_id", data.info.id)
        .maybeSingle();
      if (selectError) throw selectError;
      if (existingBookmark) {
        return;
      }

      // Proceed with the insert if no existing bookmark is found.
      const { data: result, error } = await supabase.from("Bookmark").insert({
        user_id: currentUserId, // Include the user_id to satisfy RLS policy
        movie_name: data.info.title || data.info.name || "N/A",
        movie_id: data.info.id || "N/A",
        movie_poster: data.info.backdrop_path || "N/A",
        movie_voting: data.info.vote_average || "N/A",
        movie_type: data.info.media_type || mediaType || "N/A",
        movie_release_date:
          data.info?.release_date?.split("-")[0] ||
          data.info?.first_air_date?.split("-")[0] ||
          "N/A",
      });
      if (error) throw error;
      return result;
    },
  });

  const removeBookmarkMutation = useMutation({
    mutationFn: async (data: PosterProps) => {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      const currentUserId = sessionData?.session?.user.id;
      if (!currentUserId) {
        throw new Error("No authenticated user found.");
      }

      const { data: result, error } = await supabase
        .from("Bookmark")
        .delete()
        .eq("movie_id", data.info.id);
      if (error) throw error;
      return result;
    },
  });

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
