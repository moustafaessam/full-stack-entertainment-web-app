import { useState } from "react";
import Auth from "../../features/Auth/components/Auth";

export default function AuthPage() {
  const [hasAccount, setHasAccount] = useState(false);
  return <Auth hasAccount={hasAccount} setHasAccount={setHasAccount} />;
}
