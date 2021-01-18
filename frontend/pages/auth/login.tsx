import Head from "next/head";
import Auth from "@Components/auth/AuthContainer";
import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
export default () => {
  return (
    <>
      <Head>
        <title>NewsLix | Login</title>
      </Head>
      <Auth kindForm="Login" />
    </>
  );
};
