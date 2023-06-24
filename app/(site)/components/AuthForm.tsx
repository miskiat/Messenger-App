"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallBack(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {} = useForm<FieldValues>({});

  return <div>Auth Formmm!</div>;
};
export default AuthForm;
