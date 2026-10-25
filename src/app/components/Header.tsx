import Link from "next/link";

import style from "./Header.module.css";

import { Txt } from "../components/Text";
import { cx } from "../utils/joinClassNames";
import { externalLinkAttributes as external } from "../utils/link";

export const Header: React.FC<React.ComponentProps<"header">> = ({
  className,
  ...props
}) => (
  <header
    className={className}
    {...props}
  >
    <div className={cx(style.HeaderLayout)}>
      <Txt
        tag="h1"
        size={1}
        fg={1}
        className={style.HeaderText}
        bold
      >
        Maxwell Steele
      </Txt>

      <Txt tag="p" fg={2}>
        I&apos;m an undergraduate student studying computer science at the University of Washington&apos;s{" "}
        <Link href={"https://www.cs.washington.edu/"} {...external}>
          Paul G. Allen School of Computer Science & Engineering
        </Link>{" "}
        in Seattle, Washington.
      </Txt>

      <Txt tag="p" fg={2} className={style.ContactLinks}>
        <Link href="https://linkedin.com/in/maxwell-steele" {...external}>
          LinkedIn
        </Link>
        <span className={style.ContactSep} aria-hidden>·</span>
        <Link href="mailto:msteele1@uw.edu">Email</Link>
        <span className={style.ContactSep} aria-hidden>·</span>
        <Link href="https://github.com/max-steele" {...external}>
          GitHub
        </Link>
      </Txt>
    </div>
  </header>
);
