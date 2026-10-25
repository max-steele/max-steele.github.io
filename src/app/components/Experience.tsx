import { cx } from "../utils/joinClassNames";
import style from "./Experience.module.css";

import { Txt } from "./Text";
import { MotionDivWrapper } from "./MotionDivWrapper";
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
      </div>
    </div>
  </MotionDivWrapper>
);

const mongodb: ExperienceProps[] = [
  {
    title: "Incoming Software Engineer II",
    organization: "MongoDB",
    time: "Aug 2027",
    location: "New York, NY",
  },
  {
    title: "Software Engineer Intern",
    organization: "MongoDB",
    time: "June 2026 - Aug 2026",
    location: "New York, NY",
  }
];

const tesla: ExperienceProps = {
  title: "Software Engineer Intern",
  organization: "Tesla",
  time: "Sept 2026 - Dec 2026",
  location: "Palo Alto, CA",
};

const highspot: ExperienceProps = {
  title: "Associate Engineer Intern",
  organization: "Highspot",
  time: "July 2025 - Sept 2025",
  location: "Seattle, WA",
};

const pnnl: ExperienceProps = {
  title: "Software Engineer Intern",
  organization: "Pacific Northwest National Laboratory",
  time: "Sept 2024 - July 2025",
  location: "Richland, WA",
};

export const experiences: ExperienceProps[] = [
  mongodb[0],
  tesla,
  mongodb[1],
  highspot,
  pnnl,
];