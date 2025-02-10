import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import {
  PostersContainerHeader,
  PostersContainerMainContainer,
  PostersListContainer,
} from "./PostersContainer.styles";
import Poster from "./Poster/Poster";
import { useLocation } from "react-router-dom";

type PostersContainerProps = {
  header: string;
  fetchUrl: string;
};

type RecommendedMoviesProps = {
  title: string;
  id: string;
  media_type: string;
  vote_average: string;
  backdrop_path: string;
  release_date: string;
  name: string;
  first_air_date: string;
};

export default function PostersContainer({
  header,
  fetchUrl,
}: PostersContainerProps) {
  const location = useLocation();
  const { data, isFetching, isLoading, isError } = useQuery({
    queryKey: [header, location.pathname],
    queryFn: async () => {
      const response = await fetch(fetchUrl);
      if (!response.ok) {
        throw new Error("Network Error");
      }
      const result = await response.json();
      return result;
    },
  });

  if (isFetching || isLoading) return <Loading />;
  if (isError) return <div>No data</div>;
  return (
    <PostersContainerMainContainer>
      <PostersContainerHeader>{header}</PostersContainerHeader>
      <PostersListContainer>
        {data.results.map((element: RecommendedMoviesProps) => {
          
          return (
            <Poster
              key={element.id}
              info={{
                first_air_date: element.first_air_date,
                backdrop_path: element.backdrop_path,
                title: element.title,
                id: element.id,
                media_type: element.media_type,
                vote_average: element.vote_average,
                release_date: element.release_date,
                name: element.name,
              }}
            />
          );
        })}
      </PostersListContainer>
    </PostersContainerMainContainer>
  );
}
