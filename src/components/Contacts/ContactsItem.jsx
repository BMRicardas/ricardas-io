import React from "react";
import classes from "./ContactsItem.module.css";

const ContactsItem = ({ url, logoUrl, alt }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={logoUrl} alt={alt} className={classes.image} />
      </a>
    </div>
  );
};

export default ContactsItem;
