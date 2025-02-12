import BookmarkedMovies from "../../features/BookmarkPage/BookmarkedMovies/BookmarkedMovies";
import BookmarkedTv from "../../features/BookmarkPage/BookmarkedTv/BookmarkedTv";

export type Bookmarkedmovies = {
  movie_id: string;
  movie_name: string;
  movie_poster: string;
  movie_release_date: string;
  movie_type: string;
  movie_voting: string;
  id: string;
};

export default function Bookmark() {
  return (
    <>
      <BookmarkedMovies />
      <BookmarkedTv />
    </>
  );
}
