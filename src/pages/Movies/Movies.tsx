import { useFormContext } from "react-hook-form";
import { FormInputTypes } from "../../App";
import PostersContainer from "../../components/PostersContainer/PostersContainer";

export default function Movies() {
  const { watch } = useFormContext<FormInputTypes>();
  const watchedSearch = watch("searchMovie");
  if (watchedSearch === "" || !watchedSearch)
    return (
      <PostersContainer
        header="Movies"
        fetchUrl={`https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&language=en-US&page=1
`}
      />
    );
  return (
    <PostersContainer
      header={`Results for "${watchedSearch}"`}
      fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&query=${watchedSearch}`}
    />
  );
}
