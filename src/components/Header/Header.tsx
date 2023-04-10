import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
  const getDate = (): string => {
    const date = new Date();
    return `${date.getDate()} - ${date.getMonth() + 1} - ${date
      .getFullYear()
      .toString()
      .slice(2, 4)}`;
  };

  return (
    <div className={styles.headerContainer}>
      <a>Github</a>
      <div className={styles["header-footer-text-container"]}>
        <span className={styles.headerText}>{getDate()}</span>
      </div>
      <a>LinkedIn</a>
    </div>
  );
};

export default Header;
