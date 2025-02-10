import { Outlet, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./assets/GlobalStyles";
import { lazy, Suspense } from "react";

import Loading from "./components/Loading/Loading";
import { FormProvider, useForm } from "react-hook-form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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

function Layout() {
  const form = useForm<FormInputTypes>();

  return (
    <>
      <Nav />
      <FormProvider {...form}>
        <Wrapper>
          <Search />
          <Outlet />
        </Wrapper>
      </FormProvider>
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv-series" element={<Tv />} />
            <Route path="/bookmarks" />
          </Route>
          <Route path="/log-in" element={<AuthPage />} />
          <Route path="/sign-up" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
