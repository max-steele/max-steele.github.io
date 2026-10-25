import { cx } from "../utils/joinClassNames";
import style from "./Education.module.css";

import { Txt } from "./Text";
import { MotionDivWrapper } from "./MotionDivWrapper";
import React, { ReactNode } from "react";

type EducationProps = React.ComponentProps<
  typeof Education
>;

export const Education: React.FC<
  React.ComponentProps<"div"> & {
    title: ReactNode;
    organization: ReactNode;
    time: ReactNode;
    location: ReactNode;
  }
> = ({
  className,
  title,
  organization,
  time,
  location,
}) => (
  <MotionDivWrapper>
    <div className={style.EducationContent}>
      <div className={style.EducationText}>
        <Txt size={3} fg={1} tag="h1" bold>
          {title}
        </Txt>
        <Txt size={4} fg={2} tag="h3">
          {organization}
        </Txt>
        <Txt size={5} fg={3} tag="h3">
          {time}
        </Txt>
        <Txt size={5} fg={3} tag="h3" italic>
          {location}
        </Txt>
      </div>
    </div>
  </MotionDivWrapper>
);

export const uw: EducationProps = {
  title: "B.S in Computer Science",
  organization: "University of Washington",
  time: "Sept 2023 - June 2027",
  location: "Seattle, WA",
};