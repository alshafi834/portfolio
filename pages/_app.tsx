import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div className="bg-darkblue">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
