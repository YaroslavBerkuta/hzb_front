import React, { FC } from "react";

interface IProps {
  text: string;
  onClick?: () => void;
}

export const Button: FC<IProps> = ({ text, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};
