"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 150,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  }, []);

  return null;
};

export default AosInit;
