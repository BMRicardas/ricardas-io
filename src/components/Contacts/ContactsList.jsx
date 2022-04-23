import React from "react";
import ContactsItem from "./ContactsItem";
import classes from "./ContactsList.module.css";

const DUMMY_CONTACTS = [
  {
    url: "https://github.com/BMRicardas",
    logoUrl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    alt: "My Github Page",
  },
  {
    url: "mailto:Ricardas.Brazdzius@gmail.com",
    logoUrl:
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png",
    alt: "My Email",
  },
  {
    url: "https://www.linkedin.com/in/ricardas-brazdzius/",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
    alt: "My LinkedIn Page",
  },
];

const ContactsList = () => {
  return (
    <div>
      <ul className={classes["contacts-list"]}>
        {DUMMY_CONTACTS.map((contact, i) => {
          return (
            <ContactsItem key={i} url={contact.url} logoUrl={contact.logoUrl} />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
