import React from "react";
import Header from "../components/Header";
import Lead from "../sections/Lead";
import Step from "../sections/Step";
import StepData from "../assets/steps.json";

export default function Home() {
  return (
    <div>
      <Header />
      <Lead />
      {StepData.map((item, index) => {
        return <Step data={item} />;
      })}
    </div>
  );
}
