import styled from "styled-components";

type InputLabelProps = {
  error: boolean;
};

export const StyledAuthPageMainOuterContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
`;

export const StyledAuthPageMainInnerContainer = styled.div`
  margin-top: 7.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.3rem;
  max-width: 40rem;
  width: 100%;
  height: fit-content;
  @media (max-width: 1100px) {
    margin-top: 8rem;
    gap: 7.2rem;
    max-width: 40rem;
  }
  @media (max-width: 640px) {
    gap: 5.9rem;
    margin-top: 4.8rem;
    max-width: 32.7rem;
  }
`;

export const StyledAuthHeaderIcon = styled.img``;

export const StyledAuthDetailsMainContainer = styled.form`
  width: 100%;
  padding: 3.2rem;
  background-color: var(--color-darkBlue);
  border-radius: 2rem;
  @media (max-width: 640px) {
    border-radius: 1rem;
    padding: 2.4rem;
  }
`;

export const StyledAuthType = styled.h1`
  font-family: "Outfit Light";
  font-size: 3.2rem;
  letter-spacing: -0.05rem;
  color: var(--color-white);
  text-transform: capitalize;
  margin-bottom: 4rem;
`;

export const StyledAuthInputsContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
  flex-direction: column;
  gap: 2.4rem;
`;

export const StyledInputContainer = styled.label<InputLabelProps>`
  border-bottom: 2px solid var(--color-blue);
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.7rem;
  border-bottom: ${(props) =>
    props.error ? "2px solid var(--color-red)" : ""};
  &:has(input:focus) {
    border-bottom: 2px solid var(--color-white);
  }
`;

export const StyledAuthInput = styled.input`
  height: 3.7rem;
  background-color: initial;
  border: none;
  appearance: none;
  outline: none;
  color: var(--color-white);
  opacity: 50%;
  font-family: "Outfit Light";
  font-size: 1.5rem;
  caret-color: var(--color-red);
  /* border: 2px solid red; */
  flex-grow: 1;
`;

export const StyledAuthInputError = styled.p`
  font-family: "Outfit Light";
  font-size: 1.5rem;
  color: var(--color-red);
  /* border: 2px solid blue; */
`;

export const StyledAuthButton = styled.button`
  width: 100%;
  border-radius: 0.6rem;
  background-color: var(--color-red);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  margin-bottom: 2.4rem;
  color: var(--color-white);
  font-family: "Outfit Light";
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: var(--color-white);
    color: var(--black);
  }
`;

export const StyledAuthTextContainer = styled.p`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  color: var(--color-white);
  font-family: "Outfit Light";
  font-size: 1.5rem;
`;

export const StyledAuthTextQuestion = styled.p``;

export const StyledAuthTypeColored = styled.p`
  color: var(--color-red);
  cursor: pointer;
`;
