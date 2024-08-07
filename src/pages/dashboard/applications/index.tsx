import { LayoutDashboard } from "@@/common/components/LayoutDashboard/LayoutDashboard";
import { PageMeta } from "@@/common/components/PageMeta/PageMeta";
import { getClientsInSSR } from "@@/common/libs/backendapi";
import { ListApplications } from "@@/modules/ListApplications";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { randomUUID } from "crypto";
import { GetServerSideProps } from "next";

interface Props {
  applications: any[];
}

export default function ApplicationsPage({ applications }: Props) {
  return (
    <LayoutDashboard>
      <PageMeta title="Applications" />

      <Flex justify="between" mb="4">
        <Heading>Applications</Heading>
        <Button>Add application</Button>
      </Flex>

      <ListApplications data={applications} />
    </LayoutDashboard>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const clients = await getClientsInSSR(req);
  return {
    props: { applications: [{ name: "Web App", id: randomUUID(), createdAt: new Date().toDateString() }] },
  };
};
