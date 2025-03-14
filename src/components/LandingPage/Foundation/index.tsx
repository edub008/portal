import React, { useEffect, useRef, useState } from "react";
import styles from "@site/src/components/LandingPage/Foundation/index.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import RightArrowSVG from "@site/static/img/svgIcons/rightArrowIcon.svg";
import DownloadSVG from "@site/static/img/svgIcons/download.svg";
import { motion } from "framer-motion";
import transitions from "@site/static/transitions.json";
import useGlobalData from "@docusaurus/useGlobalData";
import { useParallax } from "@site/src/utils/use-parallax-animation";
import { useSpawnAnimation } from "@site/src/utils/use-spawn-animation";

const stats = [
  { title: "Team Members", value: "260+" },
  { title: "Publications", value: "1564" },
  { title: "Citations", value: "83,347" },
  { title: "Patents", value: "191" },
];

const cards = [
  {
    isMain: true,
    title: ["Roadmap"],
    body: "The DFINITY Foundation’s contributions to the IC roadmap are subject to community discussion and voting",
    link: "/roadmap",
  },
  {
    isMain: false,
    title: ["Internet Computer Infographic"],
    body: "A beautiful dream emerged in 2014. One team set itself to realizing that dream.",
    link: "https://internetcomputer.org/icig.pdf",
  },
  {
    isMain: false,
    title: ["IC for Geeks", "White Paper"],
    body: "v1.3 April 19, 2022",
    link: "https://internetcomputer.org/whitepaper.pdf",
  },
];

function shuffle(sourceArray) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (sourceArray.length - i));

    let temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

function Card({ isMain, title, body, link }) {
  return (
    <Link
      to={link}
      className={clsx(styles.card, styles.cardHover, isMain && styles.mainCard)}
    >
      <div className={styles.cardBodyContainer}>
        {title.map((titleLine) => (
          <p className={styles.cardTitle} key={titleLine}>
            {titleLine}
          </p>
        ))}
        <p className={styles.cardBody}>{body}</p>
      </div>
      {isMain ? (
        <RightArrowSVG className={styles.cardIcon} />
      ) : (
        <DownloadSVG className={styles.cardIcon} />
      )}
    </Link>
  );
}

function Foundation() {
  const globalData = useGlobalData();
  const teamInformation = globalData["team-information"]["default"] as any;
  const [RDMembers, setRDMembers] = useState([]);
  const [OperationMembers, setOperationMembers] = useState([]);
  const [LeadershipMembers, setLeadershipMembers] = useState([]);
  const divRef = useRef(null);
  const { ref, controls } = useSpawnAnimation();
  const { frontLayerOffset, middleLayerOffset, backLayerOffset } = useParallax(
    divRef,
    150
  );

  const frontLayerMembers = [
    ...LeadershipMembers.slice(0, 2),
    ...OperationMembers.slice(0, 2),
    ...RDMembers.slice(0, 1),
  ];
  const middleLayerMembers = [
    ...OperationMembers.slice(2, 4),
    ...RDMembers.slice(1, 4),
  ];
  const backLayerMembers = [
    ...OperationMembers.slice(4, 6),
    ...RDMembers.slice(4, 8),
  ];
  useEffect(() => {
    setRDMembers(
      shuffle(teamInformation.find((t) => t.title === "R&D").members)
    );
    setOperationMembers(
      shuffle(teamInformation.find((t) => t.title === "Operations").members)
    );
    setLeadershipMembers(
      shuffle(teamInformation.find((t) => t.title === "Leadership").members)
    );
  }, []);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={transitions.container}
      className={styles.main}
    >
      <a className={styles.anchor} id="foundation" />
      <motion.div
        variants={transitions.item}
        ref={divRef}
        className={styles.container}
      >
        {frontLayerMembers.map((member) => (
          <motion.div
            className={styles.teamPhotoContainer}
            key={member.name}
            style={{ y: frontLayerOffset }}
          >
            <img src={member.photo + "?w=120"} alt={member.name} />
          </motion.div>
        ))}
        {middleLayerMembers.map((member) => (
          <motion.div
            className={styles.teamPhotoContainer}
            key={member.name}
            style={{ y: middleLayerOffset }}
          >
            <img src={member.photo + "?w=120"} alt={member.name} />
          </motion.div>
        ))}
        {backLayerMembers.map((member) => (
          <motion.div
            className={styles.teamPhotoContainer}
            key={member.name}
            style={{ y: backLayerOffset }}
          >
            <img src={member.photo + "?w=120"} alt={member.name} />
          </motion.div>
        ))}
        <img
          src={
            require("../../../../static/img/Foundation/teamPhotoMobile1.png")
              .default
          }
          alt=""
          className={styles.teamPhotoMobile1}
        />
        <motion.div variants={transitions.item} className={styles.title}>
          Blockchain’s largest R&D operation
        </motion.div>
        <motion.div className={styles.statsContainer}>
          {stats.map((stat) => (
            <div className={styles.stat} key={stat.title}>
              <span className={styles.statTitle}>{stat.title}</span>
              <span className={styles.statValue}>{stat.value}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={transitions.item}
          className={styles.mobileStatsContainer}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={stat.title}>
              {index % 2 === 1 && (
                <div className={styles.mobileStatsHorDivider} />
              )}
              <div className={styles.mobileStat}>
                <span className={styles.statTitle}>{stat.title}</span>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
              {index % 2 === 1 && index !== stats.length - 1 && (
                <div className={styles.mobileStatsVerDivider} />
              )}
            </React.Fragment>
          ))}
        </motion.div>
        <motion.div variants={transitions.item} className={styles.body}>
          The DFINITY Foundation is committed to realizing the most disruptive
          vision in tech: the adoption of public blockchain as a single
          technology stack that hosts all of humanity’s systems and services.
        </motion.div>
        <Link className={styles.actionButton} to="https://dfinity.org/about">
          GO TO THE DFINITY FOUNDATION
        </Link>
      </motion.div>
      <motion.div
        className={styles.scrollContainer}
        variants={transitions.item}
      >
        <div className={styles.mobileCardsContainer}>
          {cards.map((card) => (
            <div className={styles.cardWrapper} key={card.link}>
              <Card
                isMain={card.isMain}
                title={card.title}
                body={card.body}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={transitions.item} className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.link}
            isMain={card.isMain}
            title={card.title}
            body={card.body}
            link={card.link}
          />
        ))}
      </motion.div>
      <img
        src={
          require("../../../../static/img/Foundation/teamPhotoMobile2.png")
            .default
        }
        alt=""
        className={styles.teamPhotoMobile2}
      />
    </motion.div>
  );
}

export default Foundation;
