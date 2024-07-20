import { SignedIn, UserButton } from "@clerk/nextjs";
import { Heading } from "@radix-ui/themes";
import { RiCheckboxMultipleFill, RiGitRepositoryPrivateLine, RiHome5Line, RiStackLine } from "@remixicon/react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./LayoutDashboard.module.css";

interface Props extends PropsWithChildren {}

export function LayoutDashboard({ children }: Props) {
  return (
    <>
      <aside className={styles.sidebar}>
        <Heading className={styles.sidebarHeading} size="4">
          Subscribed
        </Heading>

        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="">
              <RiHome5Line size="18" />
              Getting started
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="">
              <RiCheckboxMultipleFill size="18" />
              Applications
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="">
              <RiStackLine size="18" />
              Event types
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuItemLink} href="">
              <RiGitRepositoryPrivateLine size="18" />
              API Access
            </Link>
          </li>
        </ul>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <div></div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        <div className={styles.content}>{children}</div>
      </main>
    </>
  );
}
