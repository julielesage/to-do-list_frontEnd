import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Line = ({ title, isDone, i, list, setList }) => {
  return (
    <div className="line">
      <input
        type="checkbox"
        checked={isDone}
        onClick={() => {
          const tab = [...list];
          tab[i].isDone = !tab[i].isDone;
          setList(tab);
        }}
      />
      <div>
        <span className={isDone === true && "checked"}>{title}</span>
      </div>
      <FontAwesomeIcon
        icon={["fas", "trash-alt"]}
        className="icon-small purple"
        onClick={() => {
          const tab = [...list];
          tab.splice(i, 1);
          setList(tab);
        }}
      />
    </div>
  );
};

export default Line;
