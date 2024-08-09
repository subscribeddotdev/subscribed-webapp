import { Table } from "@radix-ui/themes";

interface Props {
  data: any[];
}

export function ListApplications({ data }: Props) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Created at</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((app) => (
          <Table.Row key={app.id}>
            <Table.RowHeaderCell>{app.name}</Table.RowHeaderCell>
            <Table.RowHeaderCell>{app.id}</Table.RowHeaderCell>
            <Table.Cell>{app.createdAt}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
