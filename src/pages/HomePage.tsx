import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HomePage: FC<Props> = ({ children }) => {
  return (
    <>
      <h1>Hi, I'm Ričardas</h1>
      <div>{children}</div>
    </>
  );
};

export default HomePage;
