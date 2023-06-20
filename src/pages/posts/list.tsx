import { useMany, HttpError } from "@refinedev/core";
import { ShowButton, useSelect } from "@refinedev/antd";
import {
  DateField,
  FilterDropdown,
  List,
  TagField,
  TextField,
  useTable,
} from "@refinedev/antd";
import { Select, Table } from "antd";
import { ICategory, IPost } from "interfaces";

export default function PostList() {
  const { tableProps } = useTable<IPost>();

  const categoryIds =
    tableProps?.dataSource?.map((item) => item.category.id) ?? [];
  const { data: categoriesData, isLoading } = useMany<ICategory>({
    resource: "categories",
    ids: categoryIds,
    queryOptions: {
      enabled: categoryIds.length > 0,
    },
  });

  const  {selectProps} = useSelect<ICategory>({
    resource: "categories",
  });
  // const { options} = useSelect<ICategory>({
  //   resource: "categories",
  // })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="title" title="Title" />
        <Table.Column dataIndex="content" title="Content" />
        <Table.Column
          dataIndex="status"
          title="Status"
          render={(value: string) => <TagField value={value} />}
        />
        <Table.Column
          dataIndex="createdAt"
          title="createdAt"
          render={(value: number) => <DateField format="LLL" value={value} />}
        />
        <Table.Column
          dataIndex={["category", "id"]}
          title="category"
          render={(value) => {
            if (isLoading) {
              return <TextField value="Loading..." />;
            }
            return (
              <TextField
                value={
                  categoriesData?.data.find((item) => item.id === value)?.title
                }
              />
            );
          }}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                style={{ minWidth: 200 }}
                mode="multiple"
                placeholder="Select Category"
                {...selectProps}
                
              />
           
            </FilterDropdown>
          )}
        />

        <Table.Column
         <IPost>
         title="Actions"
         dataIndex={"actions"}
         render={(_text, record): React.ReactNode => {
           return(
             <ShowButton size="small" recordItemId={record.id} hideText/>
           )
         }}

        />
      </Table>
    </List>
  );
}
