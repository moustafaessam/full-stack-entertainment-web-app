import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

// Our form data type; repeatPassword is optional because it’s only needed for sign up
type AuthFormInputs = {
  email: string;
  password: string;
  repeatPassword?: string;
};

export default function Auth() {
  // Get location and navigation hooks from react-router-dom.
  const location = useLocation();
  const navigate = useNavigate();

  // Derive hasAccount from the current pathname:
  // If the pathname is "/log-in", then hasAccount is true; if "/sign-up", then false.
  const hasAccount = location.pathname === "/log-in";

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    watch,
    unregister,
  } = useForm<AuthFormInputs>();

  // When in login mode, unregister the repeatPassword field.
  useEffect(() => {
    if (hasAccount) {
      unregister("repeatPassword");
    }
  }, [hasAccount, unregister]);

  // Watch the password field so that we can validate repeatPassword when in sign-up mode.
  const watchedPassword = watch("password");

  function onSubmit(data: AuthFormInputs) {
    console.log("Form data:", data);
  }

  return (
    <StyledAuthPageMainOuterContainer>
      <StyledAuthPageMainInnerContainer>
        <StyledAuthHeaderIcon src="/images/logo.svg" alt="Logo" />
        <StyledAuthDetailsMainContainer>
          <StyledAuthType>{hasAccount ? "Login" : "Sign Up"}</StyledAuthType>
          <StyledAuthInputsContainer>
            {/* Email Field */}
            <StyledInputContainer error={!!errors.email} htmlFor="email">
              <StyledAuthInput
                id="email"
                type="text"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <StyledAuthInputError>
                  {errors.email.message}
                </StyledAuthInputError>
              )}
            </StyledInputContainer>

            {/* Password Field */}
            <StyledInputContainer error={!!errors.password} htmlFor="password">
              <StyledAuthInput
                id="password"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "At least 8 characters" },
                  validate: {
                    hasLetter: (value) =>
                      /[a-zA-Z]/.test(value) ||
                      "Must contain at least one letter",
                    hasNumber: (value) =>
                      /\d/.test(value) || "Must contain at least one number",
                  },
                })}
              />
              {errors.password && (
                <StyledAuthInputError>
                  {errors.password.message}
                </StyledAuthInputError>
              )}
            </StyledInputContainer>

            {/* Repeat Password Field (Only for Sign Up) */}
            {!hasAccount && (
              <StyledInputContainer
                error={!!errors.repeatPassword}
                htmlFor="repeatPassword"
              >
                <StyledAuthInput
                  id="repeatPassword"
                  type="password"
                  placeholder="Repeat Password"
                  {...register("repeatPassword", {
                    required: "Repeat password is required",
                    validate: {
                      matchesPassword: (value) =>
                        value === watchedPassword || "Passwords must match",
                    },
                  })}
                />
                {errors.repeatPassword && (
                  <StyledAuthInputError>
                    {errors.repeatPassword.message}
                  </StyledAuthInputError>
                )}
              </StyledInputContainer>
            )}
          </StyledAuthInputsContainer>

          {/* Submit Button */}
          <StyledAuthButton type="button" onClick={handleSubmit(onSubmit)}>
            {hasAccount ? "Login to your account" : "Create an account"}
          </StyledAuthButton>

          {/* Toggle between Login and Sign Up */}
          <StyledAuthTextContainer>
            <StyledAuthTextQuestion>
              {hasAccount
                ? "Don't have an account?"
                : "Already have an account?"}
            </StyledAuthTextQuestion>
            <StyledAuthTypeColored
              onClick={() => {
                // Navigate to the opposite route based on the current mode.
                navigate(hasAccount ? "/sign-up" : "/log-in");
              }}
            >
              {hasAccount ? "Sign Up" : "Login"}
            </StyledAuthTypeColored>
          </StyledAuthTextContainer>

          {/* React Hook Form DevTool for debugging */}
          <DevTool control={control} />
        </StyledAuthDetailsMainContainer>
      </StyledAuthPageMainInnerContainer>
    </StyledAuthPageMainOuterContainer>
  );
}
