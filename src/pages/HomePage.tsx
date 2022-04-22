import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HomePage: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default HomePage;
