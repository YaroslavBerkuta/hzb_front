import React, { FC } from "react";

interface IProps {
  text: string;
}

export const Button: FC<IProps> = ({ text }) => {
  return <button className="btn">{text}</button>;
};
