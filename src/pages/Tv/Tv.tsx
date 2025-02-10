import { useFormContext } from "react-hook-form";
import { FormInputTypes } from "../../App";
import PostersContainer from "../../components/PostersContainer/PostersContainer";

export default function Movies() {
  const { watch } = useFormContext<FormInputTypes>();
  const watchedSearch = watch("searchTv");
  if (watchedSearch === "" || !watchedSearch)
    return (
      <PostersContainer
        header="TV Series"
        fetchUrl={`https://api.themoviedb.org/3/tv/popular?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&language=en-US&page=1
`}
      />
    );
  return (
    <PostersContainer
      header={`Results for "${watchedSearch}"`}
      fetchUrl={`https://api.themoviedb.org/3/search/tv?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&query=${watchedSearch}`}
    />
  );
}
