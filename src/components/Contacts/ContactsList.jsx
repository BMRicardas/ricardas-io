import React from "react";
import ContactsItem from "./ContactsItem";

const DUMMY_CONTACTS = [
  {
    id: Math.random().toString(),
    url: "https://github.com/BMRicardas",
    logoUrl:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    alt: "My Github Page",
  },
  {
    id: Math.random().toString(),
    url: "mailto:Ricardas.Brazdzius@gmail.com",
    logoUrl:
      "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png",
    alt: "My Email",
  },
];

const ContactsList = () => {
  return (
    <div>
      <h3>Need a developer? Contact me!</h3>
      {DUMMY_CONTACTS.map((contact) => {
        return (
          <ContactsItem
            key={contact.id}
            url={contact.url}
            logoUrl={contact.logoUrl}
          />
        );
      })}
    </div>
  );
};

export default ContactsList;
