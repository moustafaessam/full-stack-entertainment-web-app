import { useQuery } from "@tanstack/react-query";
import supabase from "../../../supabase/supabaseClient";
import { Bookmarkedmovies } from "../../../pages/Bookmark/Bookmark";
import {
  PostersContainerHeader,
  PostersContainerMainContainer,
  PostersListContainer,
} from "../../../components/PostersContainer/PostersContainer.styles";
import Poster from "../../../components/PostersContainer/Poster/Poster";
import { StyledNoShows } from "./BookmarkedTv.styles";
import { useFormContext } from "react-hook-form";
import { FormInputTypes } from "../../../App";

export default function BookmarkedTv() {
  const { watch } = useFormContext<FormInputTypes>();
  const watchededSearch = watch("searchBookmark");
  const { data } = useQuery({
    queryKey: ["bookmarked shows in bookmark page for tv"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Bookmark").select("*");
      if (error) throw error;
      return data;
    },
  });
  const searchedData = watchededSearch
    ? data?.filter((element: Bookmarkedmovies) => {
        return (
          element.movie_type === "tv" &&
          element.movie_name
            .toLocaleLowerCase()
            .startsWith(watchededSearch.toLocaleLowerCase())
        );
      })
    : data?.filter((element: Bookmarkedmovies) => element.movie_type === "tv");
  return (
    <PostersContainerMainContainer>
      <PostersContainerHeader>Bookmarked Tv Series</PostersContainerHeader>
      {Array.isArray(searchedData) && searchedData.length < 1 ? (
        <StyledNoShows>No Bookmarked series</StyledNoShows>
      ) : (
        <PostersListContainer>
          {searchedData?.map((element: Bookmarkedmovies) => {
            return (
              <Poster
                key={element.id}
                info={{
                  backdrop_path: element.movie_poster,
                  title: element.movie_name,
                  id: element.movie_id,
                  media_type: element.movie_type,
                  vote_average: element.movie_voting,
                  release_date: element.movie_release_date,
                  name: element.movie_name,
                }}
              />
            );
          })}
        </PostersListContainer>
      )}
    </PostersContainerMainContainer>
  );
}
