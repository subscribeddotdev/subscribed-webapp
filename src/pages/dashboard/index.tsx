import { LayoutDashboard } from "@@/common/components/LayoutDashboard/LayoutDashboard";
import { GetServerSideProps } from "next";

interface Props {}

export default function DashboardHomePage({}: Props) {
  return <LayoutDashboard>Dashboard home page</LayoutDashboard>;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {},
  };
};
