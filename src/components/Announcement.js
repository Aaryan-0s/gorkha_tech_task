import React from "react";

const Announcement = ({ message }) => {
  return (
    <div
      className={`py-2 px-4 text-sm text-center font-medium w-full z-50 bg-[#D6E6F2] dark:bg-[#070F2B] text-gray-800 dark:text-white`}
    >
      {message}
    </div>
  );
};

export default Announcement;
