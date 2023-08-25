import React, { memo } from "react";

const Button = ({ title, icon, event }) => {
  return (
    <button
      type="button"
      onClick={event}
      className="bg-button justify-center text-xs sm:text-sm flex items-center gap-2 cursor-pointer tracking-wider p-1.5 sm:px-4 rounded text-white"
    >
      {title}
    </button>
  );
};

export default memo(Button);
