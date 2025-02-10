import { useFormContext } from "react-hook-form";
import {
  StyledSearchDivider,
  StyledSearchIcon,
  StyledSearchInput,
  StyledSearchMainContainer,
} from "./Search.styles";
import { FormInputTypes } from "../../../App";
import { DevTool } from "@hookform/devtools";
import { useLocation } from "react-router-dom";

export default function Search() {
  const { register, control } = useFormContext<FormInputTypes>();
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
        <form>
          <StyledSearchInput
            placeholder="Search"
            {...register(`${searchRegister()}`)}
            key={location.pathname}
          />
          <DevTool control={control} />
        </form>
      </StyledSearchMainContainer>
      <StyledSearchDivider />
    </>
  );
}
