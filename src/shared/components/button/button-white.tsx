import React, { FC } from "react";

interface IProps {
  text: string;
  onClick?: () => void;
}

export const ButtonWhite: FC<IProps> = ({ text, onClick }) => {
  return (
    <button className="btn btn-white" onClick={onClick}>
      {text}
    </button>
  );
};
