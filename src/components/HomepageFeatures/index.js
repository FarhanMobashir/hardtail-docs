import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/feature_pendulum.svg").default,
    description: (
      <>
        Very easy API to get most with less code. No need to do the ceremonies
        for setting it up.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/feature_book.svg").default,
    description: (
      <>
        Hardtail lets you focus on more application logic and you never have to
        think about making API calls.
      </>
    ),
  },
  {
    title: "In Pure React",
    Svg: require("@site/static/img/feature_globe.svg").default,
    description: (
      <>
        The library doesn't have any dependencies other than React which makes
        it interesting.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
