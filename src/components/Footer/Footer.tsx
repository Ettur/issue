import React, { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footerContainer}>
      <a>Martin</a>
      <div className={styles["header-footer-text-container"]}>
        <span className={styles.footerText}> TBD </span>
      </div>
      <span className={styles.symbol}>۞</span>
    </div>
  );
};

export default Footer;
