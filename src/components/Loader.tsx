import { useState, useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import anime from "animejs/lib/anime.es.js";
import IconLoader from "../components/icons/IconLoader"; // Adjust the import path as needed

const Loader = ({ finishLoading }: any) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo path",
        delay: 300,
        duration: 1500,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: "#logo #B",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".loader",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      });
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-dark-navy z-50 ${
        isMounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <Head>
        <style>{`body { overflow: hidden; }`}</style>
      </Head>

      <div
        className={`transition-opacity duration-500  border border-black ${
          isMounted ? "opacity-100" : "opacity-0"
        } w-max max-w-xs`}
      >
        <IconLoader />
      </div>
    </div>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
