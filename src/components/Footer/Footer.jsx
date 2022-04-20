import React from "react";

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  return (
    <div>
      © <a href="http://ricardas.io">Ricardas.io</a> {currentYear}. All Rights
      Reserved.
    </div>
  );
};

export default Footer;
