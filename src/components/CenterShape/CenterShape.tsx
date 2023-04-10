import React, { useEffect, useState } from "react";
import styles from "./CenterShape.module.scss";
import { useStore } from "../../store";

const CenterShape = (): JSX.Element => {
  const [view, setView, appMainTransitionTime] = useStore((state) => [
    state.view,
    state.setView,
    state.appMainTransitionTime,
  ]);
  const [isLandingView, setIsLandingView] = useState(false);

  useEffect(() => {
    view === 0 ? setIsLandingView((p) => true) : setIsLandingView((p) => false);
  }, [view]);

  return (
    <div
      style={{
        transitionDuration: `${appMainTransitionTime}ms`,
      }}
      className={`${styles["center-shape-container"]} ${
        isLandingView ? "" : styles["center-shape-mobile-transform"]
      }`}
    >
      <hr
        className={`${styles["x-axis"]} ${
          isLandingView ? "" : styles["hide-x-axis"]
        }`}
      ></hr>
      <hr
        className={`${styles["y-axis"]} ${
          isLandingView ? "" : styles["hide-y-axis"]
        }`}
      ></hr>
      <div className={styles["circle"]}></div>
      <div className={styles["center-shape-wrapper"]}>
        <div className={styles["center-shape-box-first"]}></div>
        <div
          style={{
            transitionDuration: `${appMainTransitionTime}ms`,
          }}
          className={`${styles["center-shape-box-second"]} ${
            isLandingView ? "" : styles["rotate-360"]
          }`}
          onClick={() => {
            isLandingView ? "" : setView(0);
          }}
        ></div>
      </div>
    </div>
  );
};

export default CenterShape;
