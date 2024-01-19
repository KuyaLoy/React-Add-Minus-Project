import React from "react";

const ButtonsCont = ({
  onClickAction,
  styleClass,
  buttonText,
  disableCont,
}) => {
  return (
    <button
      className={styleClass}
      onClick={onClickAction}
      disabled={disableCont}
    >
      {buttonText}
    </button>
  );
};

export default ButtonsCont;
