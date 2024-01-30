import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Formular de contact, detalii pentru programări și informații de contact."
      />
      <Contact />
    </div>
  );
};

export default contact;
