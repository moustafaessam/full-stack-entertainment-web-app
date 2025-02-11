import Auth from "../../features/Auth/components/Auth";

type AuthPageProps = {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AuthPage({ setIsAuth }: AuthPageProps) {
  return <Auth setIsAuth={setIsAuth} />;
}
