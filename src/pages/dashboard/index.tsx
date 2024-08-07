import { LayoutDashboard } from "@@/common/components/LayoutDashboard/LayoutDashboard";
import { PageMeta } from "@@/common/components/PageMeta/PageMeta";
import { GetServerSideProps } from "next";

interface Props {}

export default function DashboardHomePage({}: Props) {
  return (
    <LayoutDashboard>
      <PageMeta title="Dashboard" />
      Dashboard home page
    </LayoutDashboard>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {},
  };
};
