import { useFormContext } from "react-hook-form";
import { FormInputTypes } from "../../App";
import PostersContainer from "../../components/PostersContainer/PostersContainer";
import TrendingMainContainer from "../../features/Home/components/Trending/TrendingMainContainer/TrendingMainContainer";

export default function Home() {
  const { watch } = useFormContext<FormInputTypes>();
  const watchedSearch = watch("searchHome");
  return (
    <>
      {watchedSearch === "" || !watchedSearch ? (
        <>
          <TrendingMainContainer />
          <PostersContainer
            header="Recommended for you"
            fetchUrl={`https://api.themoviedb.org/3/trending/all/day?api_key=${
              import.meta.env.VITE_TMDB_KEY
            }`}
          />
        </>
      ) : (
        <PostersContainer
          header={`Results for "${watchedSearch}"`}
          fetchUrl={`https://api.themoviedb.org/3/search/multi?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }&query=${watchedSearch}`}
        />
      )}
    </>
  );
}
