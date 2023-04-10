import React, { useEffect, useRef, useState } from "react";
import styles from "./MainContent.module.scss";
import Landing from "../Landing/Landing";
import CenterShape from "../CenterShape/CenterShape";
import { useStore } from "../../store";
import FX from "../FX/FX";

const MainContent = (): JSX.Element => {
  const [view, appMainTransitionTime] = useStore((state) => [
    state.view,
    state.appMainTransitionTime,
  ]);
  const [mainContent, setMainContent] = useState<JSX.Element>(<></>);

  useEffect(() => {
    const selectMainContent = (): JSX.Element => {
      switch (view) {
        case 0:
          return <Landing targetView={0} />;
        case 1:
          return <FX targetView={1} />;
        default:
          return <></>;
      }
    };
    setTimeout(
      () => setMainContent((p) => selectMainContent()),
      appMainTransitionTime
    );
  }, [appMainTransitionTime, view]);

  useEffect(() => {}, [mainContent]);

  return (
    <div className={styles["main-content-container"]}>
      <div>
        <CenterShape />
      </div>
      <div className={styles["main-content-animation-wrapper"]}>
        {mainContent}
      </div>
      {/* <div className={styles["center-line"]}></div> */}
    </div>
  );
};

export default MainContent;
