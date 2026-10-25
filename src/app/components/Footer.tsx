import Link from "next/link";
import { Spacer } from "../components/Spacer";
import { Txt } from "../components/Text";
import style from "./Footer.module.css";
import { externalLinkAttributes as external } from "../utils/link";

const year = new Date().getFullYear();

export const Footer: React.FC<React.ComponentProps<"footer">> = ({
  className,
  ...props
}) => (
  <footer
    className={className}
    {...props}
  >
    <Txt tag="p" size={6} className={style.FooterSection}>
      <Txt>
        <Txt>Copyright {year}</Txt>
        <Spacer>-</Spacer>
        <Txt fg={1} bold>Max Steele</Txt>
      </Txt>
    </Txt>
  </footer>
);
