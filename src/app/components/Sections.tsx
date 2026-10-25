import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

import {
  SectionDescription,
  SectionDescriptionProps,
} from "./SectionDescription";
import { 
  Experience, 
  experiences,
} from "./Experience";
import {
  Education,
  uw
} from "./Education";
import React from "react";

export const Section: React.FC<
  React.ComponentProps<"div"> & {
    sectionDescriptionProps: SectionDescriptionProps;
  }
> = ({ className, sectionDescriptionProps, ...props }) => (
  <div
    className={cx(className, style.SectionWrapper)}
    {...props}
  >
    <div className={cx(style.Section)}>
      <SectionDescription {...sectionDescriptionProps} />
    </div>
  </div>
);

export type SectionProps = React.ComponentProps<
  typeof Section
>;

const experience: SectionProps = {
  sectionDescriptionProps: {
    header: "Experience",
    components: experiences.map((experience, index) => (
      <Experience key={index} {...experience} />
    ))
  }
};

const education: SectionProps = {
  sectionDescriptionProps: {
    header: "Education",
    components: [
      (
        <>
          <Education key={"education"} {...uw} />
        </>
      )
    ]
  }
};

export const sections = {
  experience,
  education,
};