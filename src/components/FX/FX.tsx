import React, { useState, useEffect, useRef } from "react";
import styles from "./FX.module.scss";
import { useStore } from "../../store";

interface FXProps {
  targetView: number;
}

const FX = ({ targetView }: FXProps): JSX.Element => {
  const view = useStore((state) => state.view);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    view === targetView ? setLoaded((p) => true) : setLoaded((p) => false);
  }, [targetView, view]);

  return (
    <div className={styles["FX-container"]}>
      <div className={styles["FX-text-container"]}>
        <h1
          className={`${styles["FX-text-title"]} ${
            loaded ? styles["translate-x-0"] : ""
          }`}
        >
          FX.
        </h1>
        {/* <p
          className={`${styles["FX-text"]} ${
            loaded ? styles["translate-x-0"] : ""
          }`}
        >
          Fx Jiu Jitsu on vuonna 2016 perustettu lukkopainiin ja brasilialaiseen
          jujutsuun keskittyvä kamppailulajiseura Jyväskylän Palokassa. Lajimme
          perustuvat maahanvienteihin ja mattokamppailuun erilaisin
          hallintaottein, lukotuksin ja kuristuksin. Dojoltamme löydät 400m2
          tatamia sekä kuntosalinurkkauksen. Seuramme päävalmentajana toimii
          neljännen asteen mustavyö Martin Aedma.
        </p>
        <p
          className={`${styles["FX-text"]} ${
            loaded ? styles["translate-x-0"] : ""
          }`}
        >
          Peruskurssi 90€ 2kk <br /> Jatkoryhmä 65€ kk
        </p> */}
      </div>
    </div>
  );
};

export default FX;
