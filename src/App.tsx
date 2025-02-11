import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { GlobalStyles } from "./assets/GlobalStyles";
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import { FormProvider, useForm } from "react-hook-form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const Bookmark = lazy(() => import("./pages/Bookmark/Bookmark"));
const Tv = lazy(() => import("./pages/Tv/Tv"));
const Wrapper = lazy(() => import("./components/Wrapper/Wrapper"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const Home = lazy(() => import("./pages/Home/Home"));
const Search = lazy(() => import("./features/search/components/Search"));
const Nav = lazy(() => import("./features/nav/components/Nav"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const AuthPage = lazy(() => import("./pages/Auth/AuthPage"));

const queryClient = new QueryClient();

export type FormInputTypes = {
  searchHome: string;
  searchMovie: string;
  searchTv: string;
  searchBookmark: string;
};

type LayoutProps = {
  isAuth: boolean;
};

function Layout({ isAuth }: LayoutProps) {
  const form = useForm<FormInputTypes>();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/log-in", { replace: true });
    }
  }, [navigate, isAuth]);

  return isAuth ? (
    <>
      <Nav />
      <FormProvider {...form}>
        <Wrapper>
          <Search />
          <Outlet />
        </Wrapper>
      </FormProvider>
    </>
  ) : (
    ""
  );
}

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout isAuth={isAuth} />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-series" element={<Tv />} />
            <Route path="/bookmarks" element={<Bookmark />} />
          </Route>
          <Route path="/log-in" element={<AuthPage setIsAuth={setIsAuth} />} />
          <Route path="/sign-up" element={<AuthPage setIsAuth={setIsAuth} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
