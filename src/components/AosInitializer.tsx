"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { preloadImages } from "@/lib/imageCache";

export default function AosInitializer() {
  useEffect(() => {
    preloadImages(["/images/logo/logo2.png"]);
    AOS.init({
      duration: 300,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return null;
}
