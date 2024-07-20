import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./LayoutDashboard.module.css";

interface Props extends PropsWithChildren {
  href: string;
}

function MenuItem({ children, href }: Props) {
  return (
    <li className={styles.menuItem}>
      <Link className={styles.menuItemLink} href={href}>
        {children}
      </Link>
    </li>
  );
}
