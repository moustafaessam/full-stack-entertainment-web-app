import {
  NotFoundContainer,
  NotFoundText,
  NotFoundTextRed,
} from "./NotFound.styles";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundText>
        <NotFoundTextRed>Invalid</NotFoundTextRed> URL
      </NotFoundText>
    </NotFoundContainer>
  );
}
