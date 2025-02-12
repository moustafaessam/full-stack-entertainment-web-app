import {
  StyledBookMarkContainer,
  StyledTrendingBookMark,
} from "./Bookmark.styles";

type BookMarkProps = {
  isBookmarked: boolean;
  styles?: React.CSSProperties;
};

export default function Bookmark({ isBookmarked, styles }: BookMarkProps) {
  return (
    <StyledBookMarkContainer style={styles}>
      <StyledTrendingBookMark
        src={`/images/icon-bookmark-${isBookmarked ? "full" : "empty"}.svg`}
      />
    </StyledBookMarkContainer>
  );
}
