import React from "react";

export const DropDownMenu = ({ itemsList }) => {
  return (
    <div className="dropdwonMenu">
      {itemsList.map((element, index) => {
        return <p key={index}>{element}</p>;
      })}
    </div>
  );
};
