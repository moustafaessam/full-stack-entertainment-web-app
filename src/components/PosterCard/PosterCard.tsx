import { useEffect, useState } from "react";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import supabase from "../../supabase/supabaseClient";
import {
  StyledBookMarkContainer,
  StyledTrendingBookMark,
} from "../Bookmark/Bookmark.styles";

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
    id: string;
  };
};

export default function PosterCard({ sizes, info }: PosterCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPlay, setShowPlay] = useState(false);

  const releaseDate = info.release_date
    ? info.release_date.split("-")[0]
    : ["N/A"];

  function handleClick() {
    setIsBookmarked((pre) => !pre);
    if (isBookmarked === false) {
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
        setIsBookmarked(true);
      }
    });
  }, [setIsBookmarked]);

  const addBookmarkMutation = useMutation({
    mutationFn: async (data: PosterCardProps) => {
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
        movie_name: data.info.title || "N/A",
        movie_id: data.info.id || "N/A",
        movie_poster: data.info.backdrop_path || "N/A",
        movie_voting: data.info.vote_average || "N/A",
        movie_type: data.info.media_type || "N/A",
        movie_release_date: data.info?.release_date?.split("-")[0] || "N/A",
      });
      if (error) throw error;
      return result;
    },
  });

  const removeBookmarkMutation = useMutation({
    mutationFn: async (data: PosterCardProps) => {
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

  console.log(addBookmarkMutation.error?.message);
  console.log(removeBookmarkMutation.error?.message);
  return (
    <StyledPosterCard
      sizes={sizes}
      backgroundImage={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
      onMouseEnter={() => setShowPlay(true)}
      onMouseLeave={() => setShowPlay(false)}
    >
      <StyledBookMarkContainer onClick={handleClick}>
        <StyledTrendingBookMark
          src={`/images/icon-bookmark-${isBookmarked ? "full" : "empty"}.svg`}
        />
      </StyledBookMarkContainer>
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
