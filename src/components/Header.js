import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={["far", "list-alt"]} className="icon purple" />
      <h1>ToDo List</h1>
    </header>
  );
};

export default Header;
