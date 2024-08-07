import { classnames } from "@@/common/libs/classnames";
import { RiCheckboxMultipleFill, RiGitRepositoryPrivateLine, RiHome5Line, RiStackLine } from "@remixicon/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import styles from "./LayoutDashboard.module.css";

interface MenuItemProps extends PropsWithChildren {
  href: string;
  active?: boolean;
}

export function MenuItem({ children, href, active = false }: MenuItemProps) {
  return (
    <li className={classnames(styles.menuItem, { [styles.menuItemActive]: active })} data-active={active}>
      <Link className={styles.menuItemLink} href={href}>
        {children}
      </Link>
    </li>
  );
}

interface Props {}

const menuItems = [
  {
    path: "/dashboard",
    label: "Getting started",
    icon: <RiHome5Line size="18" />,
  },
  {
    path: "/dashboard/applications",
    label: "Applications",
    icon: <RiCheckboxMultipleFill size="18" />,
  },
  {
    path: "/event-types",
    label: "Event types",
    icon: <RiStackLine size="18" />,
  },
  {
    path: "/dashboard/api-access",
    label: "API Access",
    icon: <RiGitRepositoryPrivateLine size="18" />,
  },
];

export function MenuList({}: Props) {
  const router = useRouter();

  return (
    <ul className={styles.menu}>
      {menuItems.map((item, idx) => {
        return <MenuItem active={router.asPath === item.path} key={idx} href={item.path}>
        {item.icon} {item.label}
      </MenuItem>
      })}
    </ul>
  );
}
