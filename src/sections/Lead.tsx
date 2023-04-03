import React from "react";
import { BsArrowDown } from "react-icons/bs";

export default function Lead() {
  return (
    <section
      className="h-cen v-cen col"
      style={{
        background:
          "linear-gradient(to left, #ff9472, #f2709c)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        height: "90vh",
      }}
    >
      <h1
        className="fancy-font center"
        style={{ fontSize: "3em", textAlign: "center", maxWidth: "80%" }}
      >
        Web Design? More Like Brand Design.
      </h1>
      <h2
        style={{
          fontSize: "2em",
          textAlign: "center",
          maxWidth: "70%",
          fontWeight: 100,
          fontFamily: "futura-pt",
        }}
      >
        We can create and curate your digital existence, handling everything
        from graphic design and copy writing to web development.
      </h2>
      <button
        className="button-1 h-cen v-cen"
        style={{ gap: ".5em", marginTop: "2em" }}
        onClick={() => {
          window.scrollBy({
            left: 0,
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        See How <BsArrowDown />
      </button>
    </section>
  );
}
