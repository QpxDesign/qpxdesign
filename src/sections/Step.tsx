import React from "react";

interface StepProps {
  data: StepObj;
}

interface StepObj {
  id: Number;
  title: String;
  subtitle: String;
  example_images: Array<String>;
  connecting_image: String;
}

export default function Step(props: StepProps) {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
        className="h-cen v-cen"
      >
        <div
          className="data-box"
          style={{
            flex: 1,
            maxWidth: "45%",
            minWidth: "30em",
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "2em",
            marginTop: "1em",
            flexDirection: "column",
          }}
        >
          <h1 className="fancy-font" style={{ fontSize: "2.5em" }}>
            {props.data.title}
          </h1>
          <h2 style={{ fontWeight: 400, fontSize: "1.75em" }}>
            {props.data.subtitle}
          </h2>
          <div
            className="photo-wrapper"
            style={{
              marginTop: "1em",
              maxWidth: "fit-content",
              position: "relative",
            }}
          >
            {props.data.example_images.map((i1, in1) => {
              return (
                <img
                  src={`/assets/examples/${i1}.png`}
                  style={{
                    objectFit: "contain",
                    height: "10em",
                    border: "5px solid black",
                    padding: ".25em .5em",
                    borderRadius: "2em",
                    marginTop: ".5em",
                    float: in1 === 0 ? "left" : "right",
                  }}
                />
              );
            })}
          </div>
        </div>
        <img
          src={"Assets/Path.svg"}
          style={{
            flex: 1,
            width: "45%",
            float: "right",
            height: "100vh",
            objectFit: "contain",
            marginTop: "1em",
          }}
        />
      </div>
    </section>
  );
}
