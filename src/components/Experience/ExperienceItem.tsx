import { FC } from 'react';
import classes from './ExperienceItem.module.scss';

interface Props {
  image: string;
  company: string;
  companyUrl: string;
  position: string;
  workingFrom: string;
  workingTo: string;
}

const ExperienceItem: FC<Props> = ({
  image,
  company,
  companyUrl,
  position,
  workingFrom,
  workingTo,
}) => {
  const toDateString = (to: string) => {
    if (to === 'present') {
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      return `${year}.${month >= 10 ? month : `0${month}`}`;
    }
    return to;
  };

  const getDifference = (dateFrom: Date, dateTo: Date) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  const getLastDigit = (number: number) => {
    return Number(number.toString().slice(-1));
  };

  const getLabel = (difference: number, lastDigit: number) => {
    if (difference < 0 && lastDigit === 1) {
      return `Are you sure you worked here for ${difference} month? 🤔`;
    }
    if (difference < 0) {
      return `Are you sure you worked here for ${difference} months? 🤔`;
    }
    if (lastDigit === 1) {
      return `${difference} month`;
    }
    return `${difference} months`;
  };

  const getWorkingDuration = (dateFrom: string, dateTo: string) => {
    const toDate = toDateString(dateTo);
    const from = new Date(dateFrom);
    const to = new Date(toDate);

    const difference = getDifference(from, to);
    const lastDigit = getLastDigit(difference);
    const label = getLabel(difference, lastDigit);

    return label;
  };

  return (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.btn}
    >
      <li className={classes['experience-item']}>
        <img
          src={image}
          alt={company}
          className={classes['experience-item__image']}
        />
        <div className={classes['experience-item__main']}>
          <h3 className={classes['experience-item__tertiary--main']}>
            {company}
          </h3>
          <h3 className={classes['experience-item__tertiary--sub']}>
            {position}
          </h3>
          <div className={classes['experience-item__from-to']}>
            {workingFrom} - {workingTo}
          </div>
          <div className={classes['experience-item__duration']}>
            {getWorkingDuration(workingFrom, workingTo)}
          </div>
        </div>
      </li>
    </a>
  );
};

export default ExperienceItem;
