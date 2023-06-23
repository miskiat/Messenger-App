"use client";

import { useState } from "react";

type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallBack(() => {
    if ((variant = "LOGIN")) {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, []);

  return <div>Auth Formmm!</div>;
};
export default AuthForm;
