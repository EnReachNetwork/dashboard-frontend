"use client";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Main from "@/components/Main";
import Login from "@/app/signin/page";
import backendApi from "@/lib/api";

export default function Page() {
  const { user } = useContext(AuthContext);
  backendApi.setAuth(user?.token);
  return user?.token || user?.accessToken ? <Main /> : <Login />;
}