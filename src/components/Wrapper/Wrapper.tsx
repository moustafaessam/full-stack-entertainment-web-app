import { StyledWrapper } from "./Wrapper.styles";

type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
