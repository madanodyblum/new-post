import App from "next/app";
import Head from "next/head";
import DialogProvider from "providers/DialogProvider";
import React from "react";

export default class Fast extends App {
  componentDidMount() {}

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>NewsLix</title>
        </Head>
        <DialogProvider>
          <Component {...pageProps} />
        </DialogProvider>
      </>
    );
  }
}
