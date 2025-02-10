import {
  StyledBookMarkContainer,
  StyledTrendingBookMark,
} from "./Bookmark.styles";

type BookMarkProps = {
  isBookmarked: boolean;
  setIsBookmarked: React.Dispatch<React.SetStateAction<boolean>>;
  styles?: React.CSSProperties;
};

export default function Bookmark({
  isBookmarked,
  setIsBookmarked,
  styles,
}: BookMarkProps) {
  function handleClick() {
    setIsBookmarked((pre) => !pre);
  }
  return (
    <StyledBookMarkContainer onClick={handleClick} style={styles}>
      <StyledTrendingBookMark
        src={`/images/icon-bookmark-${isBookmarked ? "full" : "empty"}.svg`}
      />
    </StyledBookMarkContainer>
  );
}
