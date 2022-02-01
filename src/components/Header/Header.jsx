import React from "react";
import "./Header.css";
import { RepositoryFactory } from "../../api/repositoryFactory";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header__brand">Yumemi</h2>
    </div>
  );
};

export default Header;
