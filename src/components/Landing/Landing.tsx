import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "./Landing.module.scss";
import { useStore } from "../../store";

interface LinkData {
  title: string;
  objectName: string;
  info: string[];
}

const links: LinkData[] = [
  {
    title: "FX",
    objectName: "FX_Jiu_Jitsu",
    info: ["Kamppailu", "Uhreilu", "Jyväskylä"],
  },
  {
    title: "Treenit",
    objectName: "AIKATAULU",
    info: [
      "Bjj / NoGi",
      "Peruskurssi",
      "Nuoret",
      "Pystypaini",
      "Drilli / Sparri",
    ],
  },
  {
    title: "Kontakti",
    objectName: "Yhteystiedot",
    info: ["Osoite", "Sähköposti", "Kartta"],
  },
  {
    title: "TBD",
    objectName: "Coming...",
    info: ["Placeholder", "text"],
  },
];

interface LandingProps {
  targetView: number;
}

const Landing = ({ targetView }: LandingProps): JSX.Element => {
  const [view, setView, appMainTransitionTime] = useStore((state) => [
    state.view,
    state.setView,
    state.appMainTransitionTime,
  ]);

  return (
    <div className={styles["landing-container"]}>
      {links.map((item, index) => {
        return (
          <div
            className={`${styles["landing-link-wrapper"]} ${
              view === targetView
                ? "translate-0"
                : styles[`link-${index}-exit-transform`]
            }`}
            key={item.objectName}
            style={{
              transitionDuration: `${appMainTransitionTime}ms`,
            }}
          >
            <a
              className={styles["landing-link"]}
              onClick={() => setView(index + 1)}
            >
              <h1 className={styles["landing-link-title"]}>{item.title}</h1>
              <div className={styles["landing-link-text-container"]}>
                <p>
                  {item.objectName} = {`[`}
                </p>
                {item.info.map((text, index) => {
                  return (
                    <p className={styles["landing-link-text"]} key={text}>
                      {text}
                    </p>
                  );
                })}
                <p>{`]`}</p>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
