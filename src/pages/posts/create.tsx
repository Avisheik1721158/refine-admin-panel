import { Create, Edit, useForm, useSelect } from '@refinedev/antd'
import { Form, Input, Select } from 'antd';
import { IPost } from 'interfaces'
import React from 'react'
export default function PostCreate() {
  const{ formProps, saveButtonProps, queryResult } = useForm<IPost>();
  const{selectProps: categorySelectProps} = useSelect<IPost>({
    resource:"categories",
   
    
  });
  return (
    <Create saveButtonProps={saveButtonProps}>
    <Form {...formProps} layout="vertical">
      <Form.Item
           label="Title"
           name="title"
           rules={[
         {
          required:true,
         }
           ]} 
      >
        <Input/>
      </Form.Item>
  
      <Form.Item
       label="Status"
       name="status"
       rules={[
        {
         required:true,
        }
          ]} 
  
      >
         <Select
         options = {
          [
           {
            label: "Published",
            value: "published",
           },
           {
            label: "Draft",
            value: "draft",
           },
           {
            label: "Rejected",
            value: "rejected",
  
           }
          ]
         }
         >
  
         </Select>
      </Form.Item>
      <Form.Item
       label="Category"
       name={["category", "id"]}
       rules={[
        {
          required: true,
        }
       ]}
      >
         <Select {...categorySelectProps} />    
      </Form.Item>
  
    </Form>
  
   </Create>
  )
}
