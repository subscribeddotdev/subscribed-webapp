import { UserButton } from "@clerk/nextjs";
import { Heading } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import styles from "./LayoutDashboard.module.css";
import { MenuList } from "./Menu";

interface Props extends PropsWithChildren {}

export function LayoutDashboard({ children }: Props) {
  return (
    <>
      <aside className={styles.sidebar}>
        <Heading className={styles.sidebarHeading} size="4">
          Subscribed
        </Heading>

        <MenuList />
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <div></div>
          <UserButton />
        </header>

        <div className={styles.content}>{children}</div>
      </main>
    </>
  );
}
