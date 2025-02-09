import { useForm } from "react-hook-form";
import {
  StyledAuthButton,
  StyledAuthDetailsMainContainer,
  StyledAuthHeaderIcon,
  StyledAuthInput,
  StyledAuthInputError,
  StyledAuthInputsContainer,
  StyledAuthPageMainInnerContainer,
  StyledAuthPageMainOuterContainer,
  StyledAuthTextContainer,
  StyledAuthTextQuestion,
  StyledAuthType,
  StyledAuthTypeColored,
  StyledInputContainer,
} from "./Auth.styles";

type AuthProps = {
  hasAccount: boolean;
  setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
};

type AuthFormInputsLogin = {
  email: string;
  password: string;
};

type AuthFormInputsSignUp = {
  email: string;
  password: string;
  repeatPassword: string;
};

// Conditional Type based on `hasAccount`
type AuthFormInputs = AuthFormInputsLogin | AuthFormInputsSignUp;

export default function Auth({ hasAccount, setHasAccount }: AuthProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthFormInputs>();
  function onSubmit(data: AuthFormInputs) {
    console.log(data);
  }
  return (
    <StyledAuthPageMainOuterContainer>
      <StyledAuthPageMainInnerContainer>
        <StyledAuthHeaderIcon src="/images/logo.svg" />
        <StyledAuthDetailsMainContainer>
          <StyledAuthType>{hasAccount ? "Login" : "Sign Up"}</StyledAuthType>
          <StyledAuthInputsContainer>
            <StyledInputContainer error={errors.email?.message ? true : false}>
              <StyledAuthInput
                type="text"
                placeholder="Email Address"
                {...register("email", {
                  required: { value: true, message: "Can't be empty" },
                })}
              />
              {errors.email?.message && (
                <StyledAuthInputError>
                  {errors.email.message}
                </StyledAuthInputError>
              )}
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledAuthInput type="text" placeholder="Password" />
            </StyledInputContainer>
            {hasAccount ? (
              ""
            ) : (
              <StyledInputContainer>
                <StyledAuthInput type="text" placeholder="Repeat Password" />
              </StyledInputContainer>
            )}
          </StyledAuthInputsContainer>
          <StyledAuthButton type="button" onSubmit={handleSubmit(onSubmit)}>
            {hasAccount ? "Login to your account" : "Create an account"}
          </StyledAuthButton>
          <StyledAuthTextContainer>
            <StyledAuthTextQuestion>
              {hasAccount
                ? "Don't have an account?"
                : "Already have an account?"}
            </StyledAuthTextQuestion>
            <StyledAuthTypeColored>
              {hasAccount ? "Sign Up" : "Login"}
            </StyledAuthTypeColored>
          </StyledAuthTextContainer>
        </StyledAuthDetailsMainContainer>
      </StyledAuthPageMainInnerContainer>
    </StyledAuthPageMainOuterContainer>
  );
}
