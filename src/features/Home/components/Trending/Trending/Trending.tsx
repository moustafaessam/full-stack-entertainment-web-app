import { useQuery } from "@tanstack/react-query";
import PosterCard from "../../../../../components/PosterCard/PosterCard";
import { StyledTrendingOuterContainer } from "./Trending.styles";
import Loading from "../../../../../components/Loading/Loading";

type MovieProps = {
  title: string;
  id: string;
  media_type: string;
  vote_average: string;
  backdrop_path: string;
  release_date: string;
};

export default function Trending() {
  const { data, isFetching, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const apiKey = import.meta.env.VITE_TMDB_KEY;
      const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result;
    },
  });

  if (isFetching || isLoading) return <Loading />;
  if (isError) return <div>No data</div>;
  return (
    <StyledTrendingOuterContainer>
      {data.results.map((element: MovieProps) => (
        <PosterCard
          key={element.id}
          info={{
            title: element.title,
            media_type: element.media_type,
            vote_average: element.vote_average,
            backdrop_path: element.backdrop_path,
            release_date: element.release_date,
          }}
        />
      ))}
    </StyledTrendingOuterContainer>
  );
}
