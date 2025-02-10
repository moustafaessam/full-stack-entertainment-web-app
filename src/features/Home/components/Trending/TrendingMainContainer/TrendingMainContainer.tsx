import Trending from "../Trending/Trending";
import {
  StyledTrendingHeader,
  StyledTrendingMainContainer,
} from "./TrendingMainContainer.styles";

export default function TrendingMainContainer() {
  return (
    <StyledTrendingMainContainer>
      <StyledTrendingHeader>Trending</StyledTrendingHeader>
      <Trending />
    </StyledTrendingMainContainer>
  );
}
