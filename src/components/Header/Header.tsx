import { FC } from 'react';
import ContactsList from '../Contacts/ContactsList';
import classes from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header__text-box']}>
        <h1 className={classes['heading-primary']}>
          <span className={classes['heading-primary--sup']}>Hello!</span>
          <span className={classes['heading-primary--main']}>
            I&#39m Ričardas
          </span>
          <span className={classes['heading-primary--sub']}>
            I can develop web
          </span>
        </h1>
        <ContactsList />
      </div>
    </header>
  );
};

export default Header;
