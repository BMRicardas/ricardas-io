import { FC } from "react";
import ContactsItem from "./ContactsItem";
import classes from "./ContactsList.module.scss";
import logoGitHub from "../../assets/images/git-hub.png";
import logoEmail from "../../assets/images/email.png";
import logoLinkedIn from "../../assets/images/linkedin.png";

interface Contact {
  url: string;
  logoUrl: string;
  alt: string;
}

const contacts: Contact[] = [
  {
    url: "https://github.com/BMRicardas",
    logoUrl: logoGitHub,
    alt: "My Github Page",
  },
  {
    url: "mailto:Ricardas.Brazdzius@gmail.com",
    logoUrl: logoEmail,
    alt: "My Email",
  },
  {
    url: "https://www.linkedin.com/in/ricardas-brazdzius/",
    logoUrl: logoLinkedIn,
    alt: "My LinkedIn Page",
  },
];

const ContactsList: FC = () => {
  return (
    <div>
      <ul className={classes["contacts-list"]}>
        {contacts.map((contact, i) => {
          return (
            <ContactsItem
              key={i}
              url={contact.url}
              logoUrl={contact.logoUrl}
              alt={contact.alt}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
