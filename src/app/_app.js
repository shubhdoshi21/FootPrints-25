"use client";

import { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css"; // Adjust the path to your global styles file

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handlePointerMove = (e) => {
      const { currentTarget: el, clientX: x, clientY: y } = e;
      const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
      el.style.setProperty("--posX", x - l - w / 2);
      el.style.setProperty("--posY", y - t - h / 2);
    };

    document.body.addEventListener("pointermove", handlePointerMove);
    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <Component {...pageProps} />;
}
