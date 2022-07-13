import { FC } from "react";
import classes from "./ContactItem.module.scss";

interface Props {
  url: string;
  logoUrl: string;
  alt: string;
}

const ContactItem: FC<Props> = ({ url, logoUrl, alt }) => {
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

export default ContactItem;
