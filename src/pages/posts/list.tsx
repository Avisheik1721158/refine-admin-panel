import { useMany, HttpError } from "@refinedev/core";

import { DateField, List, TagField, TextField, useTable } from "@refinedev/antd";
import { Table } from "antd";
import { ICategory, IPost  } from "interfaces";


interface IPost {
    id: number;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
}

export default function PostList() {
    const { tableProps } = useTable<IPost>();

    const categoryIds = tableProps?.dataSource?.map((item) => item) ?? [];
    const { data: categoriesData, isLoading } = useMany<ICategory> (
      {
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
          enabled: categoryIds.length > 0,
        }
      }
    );

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
                    render={(value: number) =>  <DateField format="LLL" value={value} /> }
                />
               <Table.Column
                      dataIndex={["category", "id"]}
                      title="category"
                      render={(value) => {
                        if(isLoading) {
                          return <TextField value="Loading..."/>;
                        }
                        return (
                          <TextField
                          value = {
                            categoriesData?.data.find(
                              (item) => item.id === value,
                            )?.title
                          }
                          />
                        );
                      } }
               ></Table.Column>

            </Table>
        </List>
    );
};