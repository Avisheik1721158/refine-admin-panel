import { Tag, Typography } from 'antd'
import React from 'react'
import { useShow, useOne } from "@refinedev/core";
import { ICategory } from 'interfaces';
import { Show } from '@refinedev/antd';

const {Title, Text } = Typography;
export default function PostShow() {
  const {queryResult} = useShow();
  const {data, isLoading} = queryResult;
  const record = data?.data;
const { data: categoryData} = useOne<ICategory>({
    resource: "categories",
    id: record?.category.id || "",
    queryOptions: {
      enabled: !!record?.category.id,
    }
})
  return (
      <Show isLoading={isLoading}>
         <Title level={5}>Title</Title>
         <Text>{record?.title}</Text>

         <Title level={5}>Status</Title>
         <Text>
              <Tag>{record?.status}</Tag>
         </Text>
         <Title level={5}>Category</Title>
         <Text>{categoryData?.data.title}</Text>
      </Show>
  )
}
