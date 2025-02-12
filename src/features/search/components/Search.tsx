import { useFormContext } from "react-hook-form";
import {
  StyledSearchDivider,
  StyledSearchIcon,
  StyledSearchInput,
  StyledSearchMainContainer,
} from "./Search.styles";
import { FormInputTypes } from "../../../App";
import { useLocation } from "react-router-dom";

export default function Search() {
  const { register } = useFormContext<FormInputTypes>();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1] || "home";

  const searchRegister = () => {
    switch (pathname) {
      case "home":
        return "searchHome";
      case "movies":
        return "searchMovie";
      case "tv-series":
        return "searchTv";
      case "bookmarks":
        return "searchBookmark";
      default:
        return "searchHome";
    }
  };

  return (
    <>
      <StyledSearchMainContainer>
        <StyledSearchIcon src="/images/icon-search.svg" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <StyledSearchInput
            placeholder="Search"
            {...register(`${searchRegister()}`)}
            key={location.pathname}
          />
        </form>
      </StyledSearchMainContainer>
      <StyledSearchDivider />
    </>
  );
}
