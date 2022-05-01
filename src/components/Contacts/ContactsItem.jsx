import React from "react";
import classes from "./ContactsItem.module.scss";

const ContactsItem = ({ url, logoUrl, alt }) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.btn}
      >
        <img src={logoUrl} alt={alt} className={classes.image} />
      </a>
    </li>
  );
};

export default ContactsItem;
