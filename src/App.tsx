import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./assets/GlobalStyles";
import AuthPage from "./pages/Auth/AuthPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/log-in" element={<AuthPage />} />
        <Route path="/sign-in" element={<AuthPage />} />
      </Routes>
    </>
  );
}
