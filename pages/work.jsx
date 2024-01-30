import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const work = () => {
  return (
    <div>
      <Hero
        heading="Servicii"
        message="Nunți, Cununii, Botezuri, Petreceri de Crăciun, Evenimente Corporate și Portrete de Familie."
      />
      <Portfolio />
    </div>
  );
};

export default work;
