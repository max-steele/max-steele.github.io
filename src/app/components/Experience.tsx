import { cx } from "../utils/joinClassNames";
import { externalLinkAttributes as external } from "../utils/link";
import style from "./Experience.module.css";

import { Txt } from "./Text";
import { MotionDivWrapper } from "./MotionDivWrapper";
import Link from "next/link";
import React, { ReactNode } from "react";

type ExperienceProps = React.ComponentProps<
  typeof Experience
>;

export const Experience: React.FC<
  React.ComponentProps<"div"> & {
    title: ReactNode;
    organization: ReactNode;
    time: ReactNode;
    location: ReactNode;
    descriptions: ReactNode[];
    image?: {
      src: string;
      alt: string;
    };
  }
> = ({
  className,
  title,
  organization,
  time,
  location,
  descriptions,
}) => (
  <MotionDivWrapper>
    <div className={style.ExperienceContainer}>
      <div className={style.ExperienceContent}>
        <div className={style.ExperienceText}>
          <Txt size={3} fg={1} tag="h1" bold>
            {organization}
          </Txt>
          <Txt size={4} fg={2} tag="h3">
            {title}
          </Txt>
          <Txt size={5} fg={3} tag="h3">
            {time}
          </Txt>
          <Txt size={5} fg={3} tag="h3" italic>
            {location}
          </Txt>
        </div>
        {descriptions.map((description, index) => (
          <div key={index} className={cx(className, style.ExperienceDescription)}>
            {description}
          </div>
        ))}
      </div>
    </div>
  </MotionDivWrapper>
);

const tesla: ExperienceProps = {
  title: "Incoming Software Engineering Intern",
  organization: "Tesla",
  time: "Sept 2026 - Dec 2026",
  location: "Palo Alto, CA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Low Voltage Architecture
        </Txt>
      </>
    )
  ]
};

const mongodb: ExperienceProps = {
  title: "Software Engineer Intern",
  organization: "MongoDB",
  time: "June 2026 - Aug 2026",
  location: "New York, NY",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          <Link href={"https://www.mongodb.com/products/capabilities/observability"} {...external}>
            Customer Observability
          </Link>      
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Developed cluster performance monitoring features for the Atlas Query Profiler.
        </Txt>
      </>
    )
  ]
};

const highspot: ExperienceProps = {
  title: "Associate Engineer Intern",
  organization: "Highspot",
  time: "July 2025 - Sept 2025",
  location: "Seattle, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          <Link href={"https://www.highspot.com/product/analytics/"} {...external}>
            Data & Analytics
          </Link>
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Developed Agentic AI features for Nexus, Highspot&apos;s unified AI and Analytics engine.
        </Txt>
      </>
    )
  ]
};

const pnnl: ExperienceProps = {
  title: "Software Engineer Intern",
  organization: "Pacific Northwest National Laboratory",
  time: "Sept 2024 - July 2025",
  location: "Seattle, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          <Link href={"https://www.pnnl.gov/ai-and-data-analytics"} {...external}>
            AI & Data Analytics
          </Link>
        </Txt>
      </>
    ),
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Developed data visualization web apps for NLP-based analytics modeling open-source scientific literature.
        </Txt>
      </>
    )
  ]
};

const gearup: ExperienceProps = {
  title: "Peer Mentor & Student Tutor",
  organization: "Washington State University GEAR-UP",
  time: "Sept 2022 - July 2023",
  location: "Kennewick, WA",
  descriptions: [
    (
      <>
        <Txt size={5} fg={2} tag="p">
          Aided students in completing coursework, financial aid forms, and college applications.
        </Txt>
      </>
    )
  ]
};

export const experiences: ExperienceProps[] = [
  tesla,
  mongodb,
  highspot,
  pnnl,
  gearup
];