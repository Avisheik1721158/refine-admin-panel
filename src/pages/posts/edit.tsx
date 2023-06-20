import { useForm, useSelect } from '@refinedev/antd'
import { IPost } from 'interfaces'
import React from 'react'

export default function PostEdit() {
  const{ formProps, saveButtonProps, queryResult } = useForm<IPost>();
  const{} = useSelect<IPost>({
    resource:"categories",
    
  })
  return (
   <div></div>
  )
}
